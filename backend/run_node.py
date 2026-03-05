"""
Bridge to run Node.js Express server via uvicorn
This file exists only to satisfy the supervisor configuration
The actual backend is server.js (Node.js/Express)
"""

import subprocess
import sys
import os
import signal

# Run the Node.js server
node_process = subprocess.Popen(
    ['node', 'server.js'],
    cwd='/app/backend',
    stdout=sys.stdout,
    stderr=sys.stderr
)

def signal_handler(sig, frame):
    node_process.terminate()
    sys.exit(0)

signal.signal(signal.SIGTERM, signal_handler)
signal.signal(signal.SIGINT, signal_handler)

# Wait for the Node.js process
node_process.wait()
