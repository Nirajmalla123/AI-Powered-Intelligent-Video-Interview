from datetime import datetime

from pydantic import BaseModel, ConfigDict


class CandidateProfileCreate(BaseModel):
    education: str | None = None
    experience: str | None = None
    skills: str | None = None


class CandidateProfileUpdate(BaseModel):
    education: str | None = None
    experience: str | None = None
    skills: str | None = None


class CandidateProfileResponse(BaseModel):
    id: int
    user_id: str
    full_name: str
    education: str | None
    experience: str | None
    skills: str | None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )