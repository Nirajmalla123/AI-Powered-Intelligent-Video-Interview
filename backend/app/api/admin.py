from fastapi import APIRouter, Depends

from app.dependencies.auth import require_role

router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
)


@router.get("/dashboard")
def dashboard(
    user=Depends(require_role("admin")),
):
    return {
        "message": "Welcome Admin",
        "user": user.email,
    }