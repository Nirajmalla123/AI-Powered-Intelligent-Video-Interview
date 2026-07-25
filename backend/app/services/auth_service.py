from sqlalchemy.orm import Session

from app.core.jwt import create_access_token
from app.core.security import hash_password, verify_password
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserRegister, UserLogin


class AuthService:

    @staticmethod
    def register(db: Session, data: UserRegister):

        if UserRepository.get_by_email(db, data.email):
            raise ValueError("Email already exists.")

        user = User(
            full_name=data.full_name,
            email=data.email,
            password_hash=hash_password(data.password),
        )

        return UserRepository.create(db, user)

    @staticmethod
    def login(db: Session, data: UserLogin):

        user = UserRepository.get_by_email(db, data.email)

        if not user:
            raise ValueError("Invalid email or password.")

        if not verify_password(data.password, user.password_hash):
            raise ValueError("Invalid email or password.")

        token = create_access_token(
            {"sub": user.email}
        )

        return {
            "access_token": token,
            "token_type": "bearer",
        }