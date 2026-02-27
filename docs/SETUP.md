# Dundobi WordPress Setup Guide

Complete step-by-step setup for local development.

---

## Prerequisites

Choose ONE of these:

### Option A: Local by Flywheel (Recommended)
- Download: https://localwp.com/downloads/
- Free version
- Auto-manages WordPress + MySQL + PHP
- GUI-based (easiest)

### Option B: GitHub Codespaces
- Free GitHub account
- 120 core-hours/month free
- Access from browser
- Already has Docker

### Option C: XAMPP
- Download: https://www.apachefriends.org/
- Manual setup
- Works on Windows/Mac/Linux

---

## Setup with Local by Flywheel (Easiest)

### 1. Install Local by Flywheel
```
1. Download from https://localwp.com/downloads/
2. Install (follow installer)
3. Launch Local app
4. Skip login (can use free without account)
```

### 2. Create New Site
```
1. Click "Create New"
2. Enter:
   - Site name: dundobi
   - Admin username: admin
   - Admin password: password123
   - Admin email: your@email.com
3. Click "Create Site"
4. Wait for WordPress to install (~2 min)
5. Click "Start Site"
```

### 3. Access WordPress

```
Local will show:
- Site URL: dundobi.local
- WP Admin: dundobi.local/wp-admin
- Database: MySQL 8.0
- PHP: 8.x
```

Open: http://dundobi.local in browser

Login:
- Username: admin
- Password: password123

### 4. Clone GitHub Repo

In Local, click "Open Site Shell":

```bash
cd app/public/wp-content/themes/

# Clone this theme into Local
git clone https://github.com/suefyawn/dundobi.git dundobi-child

# Or download as ZIP and extract
```

### 5. Activate GeneratePress Theme

WordPress Admin:

```
Appearance → Themes
```

Download GeneratePress (free):
1. Click "Add New"
2. Search "GeneratePress"
3. Click "Install"
4. Click "Activate"
5. GeneratePress is now your theme

### 6. Install Required Plugins

Admin → Plugins → Add New

Search and install (all free):

```
1. WooCommerce
   - Search "WooCommerce"
   - Install
   - Activate
   - Run setup wizard

2. Advanced Custom Fields Free (ACF)
   - Search "Advanced Custom Fields Free"
   - Install
   - Activate

3. Contact Form 7
   - Install
   - Activate

4. Yoast SEO Free
   - Install
   - Activate

5. UpdraftPlus
   - Install
   - Activate (for backups)
```

### 7. Configure WooCommerce

Admin → WooCommerce → Settings

```
General:
- Storefront URL: /shop/
- Shop page: Select "Shop"

Products:
- Product image gallery: checked
- Default product type: Simple

Tax:
- Enable tax: if selling
- Tax location: US (or your country)

Payments:
- Stripe: Add account
- PayPal: Add account
```

### 8. Test Everything

Browse:
```
http://dundobi.local
http://dundobi.local/wp-admin
http://dundobi.local/shop/
```

---

## Setup with GitHub Codespaces

### 1. Open in Codespaces

```
GitHub → https://github.com/suefyawn/dundobi
Code → Codespaces → Create codespace
```

Waits for container to start...

### 2. Start WordPress

In terminal:

```bash
docker-compose up
```

Wait for "WordPress is running at http://localhost:8000"

### 3. Initial Setup

Open: http://localhost:8000

```
Language: English
Site Title: Dundobi
Admin: admin / password
Email: your@email.com
```

### 4. Install Plugins & Theme

Same as Local by Flywheel section above.

---

## Setup with XAMPP (Manual)

### 1. Install XAMPP

Download: https://www.apachefriends.org/

```
1. Install
2. Launch XAMPP Control Panel
3. Start: Apache
4. Start: MySQL
```

### 2. Create Database

Open phpMyAdmin (http://localhost/phpmyadmin):

```
1. Click "Databases"
2. Create database: dundobi_wp
3. Charset: utf8mb4_unicode_ci
4. Create
```

### 3. Download WordPress

```
1. Download from wordpress.org
2. Extract to: C:\xampp\htdocs\dundobi\
3. Open: http://localhost/dundobi
```

### 4. Configure WordPress

```
Language: English
Database Name: dundobi_wp
Database User: root
Database Password: (leave blank)
Database Host: localhost

Table Prefix: wp_

Install WordPress
```

### 5. Install Plugins & Theme

Same as above.

---

## Project Structure After Setup

```
Local Site Directory:
├── wp-admin/
├── wp-includes/
├── wp-content/
│   ├── themes/
│   │   ├── generatepress/       (parent theme)
│   │   ├── dundobi-child/       (our customizations)
│   │   └── twentytwentyfour/    (default)
│   ├── plugins/
│   │   ├── woocommerce/
│   │   ├── advanced-custom-fields-free/
│   │   ├── contact-form-7/
│   │   ├── wordpress-seo/
│   │   └── updraftplus/
│   └── uploads/                 (images - ignore in git)
├── wp-config.php                (database config)
├── index.php
├── wp-load.php
└── ... other WP files
```

---

## Verify Installation

Open WordPress admin at: http://dundobi.local/wp-admin

Check:
```
Dashboard → Should see all plugins listed
Plugins: All should be "Active"
Appearance → GeneratePress should be active
Appearance → Customize → GeneratePress options
WooCommerce → Settings → Should show
Advanced Custom Fields → ACF options visible
```

---

## Next Steps

1. ✅ WordPress installed locally
2. ✅ Plugins installed
3. ✅ GeneratePress activated
4. ⏳ Scrape dundobi.com data
5. ⏳ Set up ACF fields
6. ⏳ Import products
7. ⏳ Test ecommerce flow
8. ⏳ Push to GitHub
9. ⏳ Deploy to live server

---

## Troubleshooting

### WordPress won't load

**Local by Flywheel:**
- Ensure site is running (green dot in Local)
- Click "Open Site" button

**XAMPP:**
- Ensure Apache + MySQL are running (green)
- Check http://localhost/phpmyadmin works

### Database connection error

Check `wp-config.php`:
```php
define('DB_NAME', 'dundobi_wp');
define('DB_USER', 'root');           // XAMPP
define('DB_PASSWORD', '');           // XAMPP (blank)
define('DB_HOST', 'localhost');
```

Local by Flywheel handles this automatically.

### Plugins not installing

- Ensure `wp-content/plugins/` folder exists
- Check folder permissions (755 or 777)
- Try uploading manually via SFTP

### White screen of death

Enable debug in `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Check: `wp-content/debug.log` for errors

---

See `DEVELOPMENT.md` for workflow guide.
