from sqlalchemy.orm import Session

from app.models.candidate_profile import CandidateProfile
from app.repositories.candidate_profile_repository import (
    CandidateProfileRepository
)


class CandidateProfileService:

    def __init__(self):
        self.repository = CandidateProfileRepository()


    def get_profile(
        self,
        db: Session,
        user_id: str
    ):
        return self.repository.get_by_user_id(
            db,
            user_id
        )

    def create_profile(
        self,
        db: Session,
        user_id: str,
        data,
        current_user
    ):

        profile = CandidateProfile(
            user_id=user_id,
            full_name=current_user.full_name,
            **data.model_dump()
        )

        return self.repository.create(
            db,
            profile
        )

    def update_profile(
        self,
        db: Session,
        user_id: str,
        data
    ):

        profile = self.repository.get_by_user_id(
            db,
            user_id
        )

        if not profile:
            return None

        return self.repository.update(
            db,
            profile,
            data.model_dump(exclude_unset=True)
        )


    def delete_profile(
        self,
        db: Session,
        user_id: str
    ):

        profile = self.repository.get_by_user_id(
            db,
            user_id
        )

        if not profile:
            return False

        self.repository.delete(
            db,
            profile
        )

        return True



