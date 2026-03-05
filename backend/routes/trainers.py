# Trainer Routes

from fastapi import APIRouter
from datetime import datetime, timezone
import uuid
from models.schemas import TrainerApplicationCreate
from services.database import add_to_collection

router = APIRouter(prefix="/trainer-applications", tags=["Trainer Applications"])


@router.post("")
async def submit_trainer_application(application: TrainerApplicationCreate):
    """Submit a trainer application"""
    new_application = {
        "id": str(uuid.uuid4()),
        "name": application.name,
        "email": application.email,
        "phone": application.phone,
        "expertise": application.expertise,
        "experience": application.experience,
        "city": application.city,
        "message": application.message,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    
    add_to_collection("trainerApplications", new_application)
    
    return {
        "success": True,
        "message": "Thank you for your application! Our team will review it and get back to you within 48 hours.",
        "application": new_application
    }
