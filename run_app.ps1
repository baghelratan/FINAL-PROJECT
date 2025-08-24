Write-Host "Starting Smart Farming Assistant..." -ForegroundColor Green
Write-Host ""

Write-Host "Installing dependencies..." -ForegroundColor Yellow
pip install -r requirements.txt
Write-Host ""

Write-Host "Launching application..." -ForegroundColor Yellow
python app.py
Write-Host ""

Write-Host "Application is running at: http://localhost:7860" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the application" -ForegroundColor Red
Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 