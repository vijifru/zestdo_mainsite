"""
Node.js Server Bridge for Supervisor Compatibility
This file allows the Node.js Express server to run via the platform's supervisor
"""

import subprocess
import sys
import os
import signal
import time

# Change to backend directory
os.chdir('/app/backend')

# Start Node.js server
print("Starting ZestDo Node.js API Server...")
node_process = subprocess.Popen(
    ['node', 'src/server.js'],
    stdout=sys.stdout,
    stderr=sys.stderr,
    cwd='/app/backend'
)

def signal_handler(signum, frame):
    print("Shutting down Node.js server...")
    node_process.terminate()
    node_process.wait()
    sys.exit(0)

signal.signal(signal.SIGTERM, signal_handler)
signal.signal(signal.SIGINT, signal_handler)

# Wait for the Node.js process
try:
    node_process.wait()
except KeyboardInterrupt:
    node_process.terminate()
    node_process.wait()
