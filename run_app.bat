@echo off
echo Starting Smart Farming Assistant...
echo.
echo Installing dependencies...
pip install -r requirements.txt
echo.
echo Launching application...
python app.py
echo.
echo Application is running at: http://localhost:7860
echo Press Ctrl+C to stop the application
pause 