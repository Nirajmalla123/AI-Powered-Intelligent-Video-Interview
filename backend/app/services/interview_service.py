from datetime import datetime, timezone

from sqlalchemy.orm import Session

from app.models.interview import Interview
from app.repositories.interview_repository import (
    InterviewRepository,
)


class InterviewService:

    def __init__(self):
        self.repository = InterviewRepository()


    def start_interview(
        self,
        db: Session,
        candidate_id: int,
        data,
    ):

        interview = Interview(
            candidate_id=candidate_id,
            topic=data.topic,
            difficulty=data.difficulty,
            status="in_progress",
            started_at=datetime.now(timezone.utc),
        )

        return self.repository.create(
            db,
            interview
        )


    def get_interview(
        self,
        db: Session,
        interview_id: int,
    ):

        return self.repository.get_by_id(
            db,
            interview_id
        )


    def get_candidate_interviews(
        self,
        db: Session,
        candidate_id: int,
    ):

        return self.repository.get_by_candidate_id(
            db,
            candidate_id
        )


    def complete_interview(
        self,
        db: Session,
        interview: Interview,
    ):

        return self.repository.update(
            db,
            interview,
            {
                "status": "completed",
                "completed_at": datetime.now(timezone.utc),
            }
        )