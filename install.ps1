# Dundobi WordPress Installation Script (PowerShell)
# Downloads and sets up WordPress core files

Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Dundobi WordPress Installation      ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if WordPress is already installed
if (Test-Path "wp-load.php") {
    Write-Host "✅ WordPress already installed" -ForegroundColor Green
    exit 0
}

Write-Host "📦 Downloading WordPress latest..." -ForegroundColor Yellow

# Download WordPress
$url = "https://wordpress.org/latest.zip"
$output = "wordpress.zip"

try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
} catch {
    Write-Host "❌ Download failed: $_" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Extracting..." -ForegroundColor Yellow

# Extract
Expand-Archive -Path $output -DestinationPath . -Force

Write-Host "📁 Moving files..." -ForegroundColor Yellow

# Move WordPress files to root
Get-ChildItem -Path "wordpress\*" -Force | Move-Item -Destination . -Force
Remove-Item "wordpress" -Force -Recurse
Remove-Item $output -Force

Write-Host "⚙️  Configuring wp-config.php..." -ForegroundColor Yellow

# Copy config
Copy-Item "wp-config-sample.php" "wp-config.php" -Force

Write-Host ""
Write-Host "✅ WordPress installed!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit wp-config.php with your database details" 
Write-Host "2. Create database: dundobi_wp"
Write-Host "3. Visit http://localhost/dundobi"
Write-Host "4. Run WordPress installation"
Write-Host ""
