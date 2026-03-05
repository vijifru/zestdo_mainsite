# Contact Routes

from fastapi import APIRouter, HTTPException
from typing import List
from datetime import datetime, timezone
import uuid
from models.schemas import ContactSubmissionCreate, ContactSubmission
from services.database import get_collection, add_to_collection, load_data, save_data

router = APIRouter(prefix="/contact", tags=["Contact"])


@router.get("")
async def get_contact_submissions():
    """Get all contact submissions (admin endpoint)"""
    return get_collection("contactSubmissions")


@router.post("")
async def submit_contact(submission: ContactSubmissionCreate):
    """Submit a contact form"""
    new_submission = {
        "id": str(uuid.uuid4()),
        "name": submission.name,
        "email": submission.email,
        "phone": submission.phone,
        "userType": submission.userType,
        "subject": submission.subject,
        "message": submission.message,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    
    add_to_collection("contactSubmissions", new_submission)
    
    return {
        "success": True,
        "message": "Thank you for contacting us! We will get back to you within 24 hours.",
        "submission": new_submission
    }
