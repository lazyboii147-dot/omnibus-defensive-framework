#!/usr/bin/env bash
echo "[*] Initializing environment manual triage..."
uname -a
env | grep -i "omnibus" || echo "[-] No environment variables set for OMNIBUS."
