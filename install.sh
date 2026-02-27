#!/bin/bash
# Dundobi WordPress Installation Script
# Downloads and sets up WordPress core files

set -e

echo "╔════════════════════════════════════════╗"
echo "║   Dundobi WordPress Installation      ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if WordPress is already installed
if [ -f "wp-load.php" ]; then
    echo "✅ WordPress already installed"
    exit 0
fi

echo "📦 Downloading WordPress latest..."

# Download WordPress
curl -O https://wordpress.org/latest.zip

echo "📦 Extracting..."
unzip -q latest.zip

echo "📁 Moving files..."
cp -r wordpress/* .
rm -rf wordpress latest.zip

echo "⚙️  Configuring wp-config.php..."
cp wp-config-sample.php wp-config.php

echo ""
echo "✅ WordPress installed!"
echo ""
echo "Next steps:"
echo "1. Edit wp-config.php with your database details"
echo "2. Create database: dundobi_wp"
echo "3. Visit http://localhost/dundobi"
echo "4. Run WordPress installation"
echo ""
