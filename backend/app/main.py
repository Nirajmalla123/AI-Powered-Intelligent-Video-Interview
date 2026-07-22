from fastapi import FastAPI

app = FastAPI(
    title="AI Interview Assessment System API",
    version="1.0.0",
    description="Backend API for the AI-Powered Intelligent Video Interview Assessment System",
)

@app.get("/")
def root():
    return {"message": "AI Interview Assessment System API is running 🚀"}