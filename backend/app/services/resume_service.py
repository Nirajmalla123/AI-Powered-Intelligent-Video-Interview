import os
import uuid

from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.models.resume import Resume
from app.repositories.resume_repository import ResumeRepository


class ResumeService:

    def __init__(self):
        self.repository = ResumeRepository()
        self.upload_directory = "uploads/resumes"


    async def upload_resume(
        self,
        db: Session,
        candidate_id: int,
        file: UploadFile,
    ):

        os.makedirs(
            self.upload_directory,
            exist_ok=True,
        )

        extension = (
            file.filename.split(".")[-1]
            if "." in file.filename
            else "pdf"
        )

        filename = f"{uuid.uuid4()}.{extension}"

        filepath = os.path.join(
            self.upload_directory,
            filename,
        )

        content = await file.read()

        with open(filepath, "wb") as buffer:
            buffer.write(content)

        existing = self.repository.get_by_candidate_id(
            db,
            candidate_id,
        )

        if existing:

            existing.file_name = file.filename
            existing.file_url = filepath
            existing.file_type = file.content_type
            existing.file_size = len(content)

            db.commit()
            db.refresh(existing)

            return existing

        resume = Resume(
            candidate_id=candidate_id,
            file_name=file.filename,
            file_url=filepath,
            file_type=file.content_type,
            file_size=len(content),
        )

        return self.repository.create(
            db,
            resume,
        )


    def get_resume(
        self,
        db: Session,
        candidate_id: int,
    ):
        return self.repository.get_by_candidate_id(
            db,
            candidate_id,
        )


    def delete_resume(
        self,
        db: Session,
        candidate_id: int,
    ):

        resume = self.repository.get_by_candidate_id(
            db,
            candidate_id,
        )

        if not resume:
            return False

        if os.path.exists(resume.file_url):
            os.remove(resume.file_url)

        self.repository.delete(
            db,
            resume,
        )

        return True