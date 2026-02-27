#!/bin/bash
# Dundobi Codespaces Auto-Setup
# Runs automatically when Codespaces starts

set -e

echo "╔════════════════════════════════════════╗"
echo "║   🚀 Dundobi WordPress Auto-Setup     ║"
echo "╚════════════════════════════════════════╝"
echo ""

# ============================================================================
# 1. Wait for MySQL to start
# ============================================================================
echo "⏳ Waiting for MySQL to start..."
for i in {1..30}; do
    if mysqladmin ping -h localhost -u root >/dev/null 2>&1; then
        echo "✅ MySQL is ready"
        break
    fi
    sleep 2
done

# ============================================================================
# 2. Create database
# ============================================================================
echo "📁 Creating database..."
mysql -h localhost -u root -e "CREATE DATABASE IF NOT EXISTS dundobi_wp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -h localhost -u root -e "CREATE USER IF NOT EXISTS 'wordpress'@'localhost' IDENTIFIED BY 'wordpress';"
mysql -h localhost -u root -e "GRANT ALL PRIVILEGES ON dundobi_wp.* TO 'wordpress'@'localhost';"
mysql -h localhost -u root -e "FLUSH PRIVILEGES;"
echo "✅ Database created"

# ============================================================================
# 3. Download WordPress
# ============================================================================
if [ ! -f "wp-load.php" ]; then
    echo "📦 Downloading WordPress latest..."
    cd /tmp
    curl -s -O https://wordpress.org/latest.zip
    
    echo "📦 Extracting..."
    unzip -q latest.zip
    
    echo "📁 Moving files to /var/www/html..."
    cp -r wordpress/* /var/www/html/
    rm -rf wordpress latest.zip
    
    echo "⚙️  Configuring wp-config.php..."
    cp /var/www/html/wp-config-sample.php /var/www/html/wp-config.php
    
    # Update database details in wp-config.php
    sed -i "s/database_name_here/dundobi_wp/" /var/www/html/wp-config.php
    sed -i "s/username_here/wordpress/" /var/www/html/wp-config.php
    sed -i "s/password_here/wordpress/" /var/www/html/wp-config.php
    sed -i "s/localhost/127.0.0.1/" /var/www/html/wp-config.php
    
    echo "✅ WordPress installed"
else
    echo "✅ WordPress already installed"
fi

# ============================================================================
# 4. Set permissions
# ============================================================================
echo "🔧 Setting permissions..."
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html/wp-content
chmod -R 777 /var/www/html/wp-content/uploads

# ============================================================================
# 5. Enable Apache modules
# ============================================================================
echo "🔧 Configuring Apache..."
a2enmod rewrite >/dev/null 2>&1 || true
a2enmod headers >/dev/null 2>&1 || true

# Create Apache vhost config
cat > /etc/apache2/sites-available/000-default.conf <<'EOF'
<VirtualHost *:80>
    ServerAdmin admin@dundobi.local
    DocumentRoot /var/www/html

    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.php [L]
        </IfModule>
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOF

systemctl restart apache2 >/dev/null 2>&1 || service apache2 restart >/dev/null 2>&1 || true

echo "✅ Apache configured"

# ============================================================================
# 6. Install WP-CLI
# ============================================================================
echo "📦 Installing WP-CLI..."
if ! command -v wp &> /dev/null; then
    curl -s -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    mv wp-cli.phar /usr/local/bin/wp
    echo "✅ WP-CLI installed"
else
    echo "✅ WP-CLI already installed"
fi

# ============================================================================
# 7. Display setup info
# ============================================================================
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                  ✅ Setup Complete!                           ║"
echo "╠════════════════════════════════════════════════════════════════╣"
echo "║                                                                ║"
echo "║  WordPress Location: /var/www/html                            ║"
echo "║  Database: dundobi_wp                                         ║"
echo "║  User: wordpress / password                                   ║"
echo "║  Host: 127.0.0.1                                              ║"
echo "║                                                                ║"
echo "║  Access WordPress:                                            ║"
echo "║  - Browser: http://localhost (or your Codespaces URL)        ║"
echo "║  - Admin: http://localhost/wp-admin                           ║"
echo "║                                                                ║"
echo "║  Next Steps:                                                   ║"
echo "║  1. Visit http://localhost                                    ║"
echo "║  2. Complete WordPress setup (language, title, admin)         ║"
echo "║  3. Install plugins (WooCommerce, ACF, Contact Form 7)        ║"
echo "║  4. Start developing!                                         ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
