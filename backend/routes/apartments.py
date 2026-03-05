# Apartment Routes

from fastapi import APIRouter
from datetime import datetime, timezone
import uuid
from models.schemas import ApartmentInquiryCreate
from services.database import add_to_collection

router = APIRouter(prefix="/apartment-inquiries", tags=["Apartment Inquiries"])


@router.post("")
async def submit_apartment_inquiry(inquiry: ApartmentInquiryCreate):
    """Submit an apartment partnership inquiry"""
    new_inquiry = {
        "id": str(uuid.uuid4()),
        "contactName": inquiry.contactName,
        "email": inquiry.email,
        "phone": inquiry.phone,
        "apartmentName": inquiry.apartmentName,
        "city": inquiry.city,
        "unitsCount": inquiry.unitsCount,
        "message": inquiry.message,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    
    add_to_collection("apartmentInquiries", new_inquiry)
    
    return {
        "success": True,
        "message": "Thank you for your interest in partnering with ZestDo! Our team will contact you within 24 hours.",
        "inquiry": new_inquiry
    }
