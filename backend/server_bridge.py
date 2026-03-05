"""
This file redirects the backend to Node.js/Express.
The actual API is implemented in server.js
"""

import os
import subprocess
import sys
import atexit
import signal
import time

# Start Node.js server in the background
node_process = None

def start_node():
    global node_process
    node_process = subprocess.Popen(
        ['node', 'server.js'],
        cwd='/app/backend',
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT
    )
    
def cleanup():
    global node_process
    if node_process:
        node_process.terminate()
        node_process.wait()

atexit.register(cleanup)

def handle_signal(signum, frame):
    cleanup()
    sys.exit(0)

signal.signal(signal.SIGTERM, handle_signal)
signal.signal(signal.SIGINT, handle_signal)

# Start Node.js
start_node()

# Create minimal FastAPI app for uvicorn compatibility
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
import httpx

app = FastAPI()

# Proxy all requests to Node.js
@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def proxy(path: str):
    async with httpx.AsyncClient() as client:
        response = await client.request(
            method="GET",
            url=f"http://localhost:8002/{path}"
        )
        return response.json()
