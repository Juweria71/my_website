@echo off
setlocal
cd /d "%~dp0"
set "PYTHON_EXE=C:\Users\maimu\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not exist "%PYTHON_EXE%" (
  echo Python runtime was not found. Open README.md for setup instructions.
  pause
  exit /b 1
)
start "" "http://127.0.0.1:4173/#order-ai"
"%PYTHON_EXE%" server.py --port 4173
pause
