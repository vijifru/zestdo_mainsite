"""
ZestDo API Server
Express-style FastAPI application with modular routes
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timezone
import json
import uuid
from pathlib import Path

# ============================================
# Database Service (mock.json)
# ============================================

DATA_PATH = Path(__file__).parent / 'data' / 'mock.json'

def load_data():
    try:
        with open(DATA_PATH, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading data: {e}")
        return {}

def save_data(data):
    try:
        with open(DATA_PATH, 'w') as f:
            json.dump(data, f, indent=2)
        return True
    except Exception as e:
        print(f"Error saving data: {e}")
        return False

def get_collection(name):
    return load_data().get(name, [])

def add_to_collection(name, item):
    data = load_data()
    if name not in data:
        data[name] = []
    data[name].append(item)
    return save_data(data)

# ============================================
# FastAPI App
# ============================================

app = FastAPI(title="ZestDo API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# Health Routes
# ============================================

@app.get("/api")
async def root():
    return {"message": "ZestDo API is running!", "timestamp": datetime.now(timezone.utc).isoformat(), "version": "1.0.0"}

@app.get("/api/health")
async def health():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

# ============================================
# Activities Routes
# ============================================

@app.get("/api/activities")
async def get_activities():
    return get_collection("activities")

@app.get("/api/activities/{id}")
async def get_activity(id: int):
    activities = get_collection("activities")
    for a in activities:
        if a["id"] == id:
            return a
    raise HTTPException(404, "Activity not found")

# ============================================
# Testimonials Routes
# ============================================

@app.get("/api/testimonials")
async def get_testimonials():
    return get_collection("testimonials")

@app.get("/api/testimonials/role/{role}")
async def get_testimonials_by_role(role: str):
    testimonials = get_collection("testimonials")
    return [t for t in testimonials if t["role"].lower() == role.lower()]

# ============================================
# Subscription Plans Routes
# ============================================

@app.get("/api/subscription-plans")
async def get_plans():
    return get_collection("subscriptionPlans")

@app.get("/api/subscription-plans/popular")
async def get_popular_plan():
    plans = get_collection("subscriptionPlans")
    for p in plans:
        if p.get("popular"):
            return p
    raise HTTPException(404, "No popular plan found")

# ============================================
# General Data Routes
# ============================================

@app.get("/api/user-roles")
async def get_user_roles():
    return get_collection("userRoles")

@app.get("/api/why-zestdo")
async def get_why_zestdo():
    return get_collection("whyZestDoPoints")

@app.get("/api/communities")
async def get_communities():
    return get_collection("communities")

@app.get("/api/stats")
async def get_stats():
    return load_data().get("stats", {})

# ============================================
# Contact Routes
# ============================================

@app.get("/api/contact")
async def get_contacts():
    return get_collection("contactSubmissions")

@app.post("/api/contact")
async def submit_contact(data: dict):
    if not all(k in data for k in ["name", "email", "subject", "message"]):
        raise HTTPException(400, "Missing required fields")
    
    submission = {
        "id": str(uuid.uuid4()),
        "name": data["name"],
        "email": data["email"],
        "phone": data.get("phone"),
        "userType": data.get("userType", "other"),
        "subject": data["subject"],
        "message": data["message"],
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    add_to_collection("contactSubmissions", submission)
    return {"success": True, "message": "Thank you for contacting us! We will get back to you within 24 hours.", "submission": submission}

# ============================================
# Waitlist Routes
# ============================================

@app.get("/api/waitlist/count")
async def get_waitlist_count():
    return {"count": len(get_collection("waitlistSignups"))}

@app.post("/api/waitlist")
async def join_waitlist(data: dict):
    if "email" not in data:
        raise HTTPException(400, "Email is required")
    
    waitlist = get_collection("waitlistSignups")
    if any(w["email"] == data["email"] for w in waitlist):
        raise HTTPException(400, "This email is already on the waitlist")
    
    signup = {
        "id": str(uuid.uuid4()),
        "name": data.get("name"),
        "email": data["email"],
        "phone": data.get("phone"),
        "userType": data.get("userType", "parent"),
        "apartmentName": data.get("apartmentName"),
        "city": data.get("city", "Bengaluru"),
        "createdAt": datetime.now(timezone.utc).isoformat()
    }
    add_to_collection("waitlistSignups", signup)
    return {"success": True, "message": "You have been added to the waitlist!", "signup": signup}

# ============================================
# Trainer Application Routes
# ============================================

@app.post("/api/trainer-applications")
async def submit_trainer(data: dict):
    if not all(k in data for k in ["name", "email", "expertise"]):
        raise HTTPException(400, "Missing required fields")
    
    application = {
        "id": str(uuid.uuid4()),
        "name": data["name"],
        "email": data["email"],
        "phone": data.get("phone"),
        "expertise": data["expertise"],
        "experience": data.get("experience"),
        "city": data.get("city", "Bengaluru"),
        "message": data.get("message"),
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    add_to_collection("trainerApplications", application)
    return {"success": True, "message": "Thank you for your application!", "application": application}

# ============================================
# Apartment Inquiry Routes
# ============================================

@app.post("/api/apartment-inquiries")
async def submit_apartment(data: dict):
    if not all(k in data for k in ["contactName", "email", "apartmentName"]):
        raise HTTPException(400, "Missing required fields")
    
    inquiry = {
        "id": str(uuid.uuid4()),
        "contactName": data["contactName"],
        "email": data["email"],
        "phone": data.get("phone"),
        "apartmentName": data["apartmentName"],
        "city": data.get("city", "Bengaluru"),
        "unitsCount": data.get("unitsCount"),
        "message": data.get("message"),
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    add_to_collection("apartmentInquiries", inquiry)
    return {"success": True, "message": "Thank you for your interest!", "inquiry": inquiry}
