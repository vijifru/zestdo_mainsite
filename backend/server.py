"""
ZestDo API Server
Main entry point for the FastAPI application
"""

from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
from datetime import datetime, timezone
import logging
import sys
from pathlib import Path

# Add backend directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

# Import route modules
from routes import activities, testimonials, plans, contact, waitlist, trainers, apartments, stats

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create the main app
app = FastAPI(
    title="ZestDo API",
    description="Backend API for ZestDo - Apartment-Based Kids Activity Platform",
    version="1.0.0"
)

# Create main API router
api_router = APIRouter(prefix="/api")


# ============================================
# Health Check Routes
# ============================================

@api_router.get("/")
async def root():
    """API root endpoint"""
    return {
        "message": "ZestDo API is running!",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "version": "1.0.0"
    }


@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


# ============================================
# Include Route Modules
# ============================================

api_router.include_router(activities.router)
api_router.include_router(testimonials.router)
api_router.include_router(plans.router)
api_router.include_router(contact.router)
api_router.include_router(waitlist.router)
api_router.include_router(trainers.router)
api_router.include_router(apartments.router)
api_router.include_router(stats.router)

# Include the main API router
app.include_router(api_router)

# ============================================
# CORS Middleware
# ============================================

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# Startup/Shutdown Events
# ============================================

@app.on_event("startup")
async def startup_event():
    logger.info("ZestDo API server starting up...")


@app.on_event("shutdown")
async def shutdown_event():
    logger.info("ZestDo API server shutting down...")
