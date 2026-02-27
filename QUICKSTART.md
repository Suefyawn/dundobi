# Dundobi WordPress - Quick Start (5 Minutes)

Get WordPress running locally in minutes.

---

## Prerequisites

Choose ONE setup:

### **Option 1: Local by Flywheel (Easiest - Recommended)**
- Download: https://localwp.com/downloads/
- Free, auto-manages everything
- ✅ **Best for beginners**

### **Option 2: XAMPP (Manual)**
- Download: https://www.apachefriends.org/
- Requires manual setup
- ✅ **Works on any OS**

### **Option 3: GitHub Codespaces (Cloud)**
- Free 120 core-hours/month
- No local setup needed
- ✅ **Access from browser**

---

## Quick Start: Local by Flywheel

### 1. Create New Site in Local

```
1. Open Local app
2. Click "Create New"
3. Site name: dundobi
4. Admin: admin / password
5. Email: your@email.com
6. Click "Create"
```

Local auto-installs WordPress. Wait 2 minutes.

### 2. Clone Repository

Open Local's "Open Site Shell":

```bash
cd app/public
git clone https://github.com/Suefyawn/dundobi.git .
```

This pulls all our code into Local's WordPress.

### 3. Install Plugins

WordPress Admin → Plugins → Add New

Install these (free):
- WooCommerce
- Advanced Custom Fields Free
- Contact Form 7

### 4. Activate Theme

WordPress Admin → Appearance → Themes
- Download GeneratePress (free)
- Activate GeneratePress
- Our dundobi-child theme customizations auto-load

### 5. Done!

Visit: http://dundobi.local

✅ WordPress ready  
✅ Theme active  
✅ Plugins installed  
✅ ACF fields defined  

---

## Quick Start: XAMPP

### 1. Install XAMPP

Download: https://www.apachefriends.org/
- Install with Apache + MySQL
- Start Apache
- Start MySQL

### 2. Create Database

Open phpMyAdmin: http://localhost/phpmyadmin

```
1. Databases tab
2. Create: dundobi_wp
3. Charset: utf8mb4_unicode_ci
```

### 3. Clone Repository

```bash
cd C:\xampp\htdocs
git clone https://github.com/Suefyawn/dundobi.git
cd dundobi
```

### 4. Setup WordPress

Run install script:

```bash
# PowerShell
.\install.ps1

# Or bash
bash install.sh
```

This downloads + extracts WordPress core files.

### 5. Configure WordPress

Edit: `wp-config.php`

```php
define('DB_NAME', 'dundobi_wp');
define('DB_USER', 'root');
define('DB_PASSWORD', '');  // Blank for XAMPP
define('DB_HOST', 'localhost');
```

### 6. Install WordPress

Visit: http://localhost/dundobi

```
Language: English
Site Title: Dundobi
Admin: admin / password123
Email: your@email.com

Finish
```

### 7. Install Plugins

WordPress Admin → Plugins → Add New
- WooCommerce
- Advanced Custom Fields Free
- Contact Form 7

### 8. Activate Theme

Admin → Appearance → Themes
- Download GeneratePress
- Activate
- Done!

---

## Quick Start: GitHub Codespaces

### 1. Open in Codespaces

Go: https://github.com/Suefyawn/dundobi

```
Code → Codespaces → Create codespace
```

Wait for environment to start.

### 2. Start WordPress

In terminal:

```bash
docker-compose up
```

Wait for "WordPress is running at http://localhost:8000"

### 3. Initial Setup

Visit: http://localhost:8000

```
Language: English
Site Title: Dundobi
Admin: admin / password
Email: your@email.com
```

### 4. Install Plugins

Same as above (WooCommerce, ACF, Contact Form 7)

### 5. Done!

Everything ready in browser.

---

## Verify Everything Works

### Check These

1. **Homepage:**
   - http://dundobi.local (or http://localhost:8000)

2. **WordPress Admin:**
   - http://dundobi.local/wp-admin
   - Username: admin
   - Password: (what you set)

3. **Plugins Active:**
   - Admin → Plugins
   - Should see: WooCommerce, ACF, Contact Form 7

4. **GeneratePress Active:**
   - Admin → Appearance → Themes
   - GeneratePress: Active

5. **ACF Fields Ready:**
   - Admin → ACF
   - Should see: Puppy Details, Breeding Dog Details

6. **WooCommerce Ready:**
   - Admin → WooCommerce
   - Settings page loads

---

## Next Steps (After Setup)

### 1. Scrape Dundobi Data

```bash
node scripts/scrape-dundobi.js
```

Creates: `dundobi-data/json/dundobi-data.json` + images

### 2. Import Products

(Script coming soon - will import to WordPress)

### 3. Commit to GitHub

```bash
git add .
git commit -m "Add products from dundobi.com"
git push origin main
```

### 4. Deploy to Live Server

See: `docs/DEPLOYMENT.md`

---

## Troubleshooting

### WordPress won't load

**Local by Flywheel:**
- Ensure site is running (green dot)
- Click "Open Site"

**XAMPP:**
- Check Apache + MySQL running
- Verify database created

**Codespaces:**
- Check terminal for errors
- Rebuild container: `docker-compose down && docker-compose up`

### Database error

Check `wp-config.php`:
- DB_NAME: dundobi_wp
- DB_USER: root (XAMPP) or dundobi_user (Local)
- DB_PASSWORD: blank (XAMPP) or local password
- DB_HOST: localhost

### Plugins won't install

- Ensure `wp-content/plugins/` folder exists
- Check folder permissions (777)
- Try upload manually via SFTP

### White screen

Enable debug in `wp-config.php`:
```php
define('WP_DEBUG', true);
```

Check: `wp-content/debug.log`

---

## You're All Set!

WordPress is running, our theme is active, plugins are installed.

Next: Scrape dundobi.com and import products.

See `docs/` folder for complete guides.

---

**Questions?** See:
- `SETUP.md` — Detailed setup
- `DEVELOPMENT.md` — How to make changes
- `README.md` — Project overview
