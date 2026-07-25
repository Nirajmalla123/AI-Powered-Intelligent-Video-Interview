from fastapi import FastAPI
from sqlalchemy import text

from app.core.database import engine
from app.core.security import hash_password, verify_password
from app.core.jwt import create_access_token, verify_token
from app.api.auth import router as auth_router
from app.api.admin import router as admin_router


from fastapi.middleware.cors import CORSMiddleware

from app.core.logger import setup_logging
from app.core.exceptions import register_exception_handlers

from app.middleware.request_logging import RequestLoggingMiddleware
from app.middleware.process_time import ProcessTimeMiddleware
from app.middleware.security_headers import SecurityHeadersMiddleware

setup_logging()
app = FastAPI(
    title="AI Interview Assessment System API",
    version="1.0.0",
    description="Backend API for the AI-Powered Intelligent Video Interview Assessment System",
)


app.add_middleware(ProcessTimeMiddleware)
app.add_middleware(RequestLoggingMiddleware)
app.add_middleware(SecurityHeadersMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_exception_handlers(app)



# Register routers
app.include_router(auth_router)
app.include_router(admin_router)


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


@app.get("/health")
def health_check():
    return {
        "success": True,
        "status": "healthy"
    }