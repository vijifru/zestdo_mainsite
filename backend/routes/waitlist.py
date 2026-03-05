# Waitlist Routes

from fastapi import APIRouter, HTTPException
from datetime import datetime, timezone
import uuid
from models.schemas import WaitlistSignupCreate
from services.database import get_collection, add_to_collection

router = APIRouter(prefix="/waitlist", tags=["Waitlist"])


@router.get("/count")
async def get_waitlist_count():
    """Get total waitlist count"""
    waitlist = get_collection("waitlistSignups")
    return {"count": len(waitlist)}


@router.post("")
async def join_waitlist(signup: WaitlistSignupCreate):
    """Join the waitlist"""
    waitlist = get_collection("waitlistSignups")
    
    # Check if email already exists
    existing = [w for w in waitlist if w.get("email") == signup.email]
    if existing:
        raise HTTPException(status_code=400, detail="This email is already on the waitlist")
    
    new_signup = {
        "id": str(uuid.uuid4()),
        "name": signup.name,
        "email": signup.email,
        "phone": signup.phone,
        "userType": signup.userType,
        "apartmentName": signup.apartmentName,
        "city": signup.city,
        "createdAt": datetime.now(timezone.utc).isoformat()
    }
    
    add_to_collection("waitlistSignups", new_signup)
    
    return {
        "success": True,
        "message": "You have been added to the waitlist! We will notify you when we launch in your area.",
        "signup": new_signup
    }
