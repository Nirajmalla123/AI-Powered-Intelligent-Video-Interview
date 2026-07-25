from fastapi import FastAPI
from sqlalchemy import text

from app.core.database import engine
from app.core.security import hash_password, verify_password
from app.core.jwt import create_access_token, verify_token
from app.api.auth import router as auth_router


app = FastAPI(
    title="AI Interview Assessment System API",
    version="1.0.0",
    description="Backend API for the AI-Powered Intelligent Video Interview Assessment System",
)
app.include_router(auth_router)



@app.get("/")
def root():
    return {"message": "AI Interview Assessment System API is running 🚀"}


@app.get("/db-test")
def db_test():
    """
    Simple endpoint to verify that the application
    can successfully connect to PostgreSQL.
    """
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "database": "Connected Successfully ✅"
    }




@app.get("/jwt")
def jwt_test():
    token = create_access_token(
        {"sub": "niraj@example.com"}
    )

    return {
        "access_token": token
    }


@app.get("/jwt-verify")
def jwt_verify():
    token = create_access_token(
        {"sub": "niraj@example.com"}
    )

    payload = verify_token(token)

    return payload