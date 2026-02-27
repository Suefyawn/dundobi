# GitHub Codespaces - Fully Automated Setup

**Zero setup needed. Everything happens automatically.**

---

## How It Works

### Step 1: Open in Codespaces

Go to: https://github.com/Suefyawn/dundobi

Click: **Code** → **Codespaces** → **Create codespace on master**

Codespaces starts (wait 1-2 minutes).

### Step 2: It's Automatic

While Codespaces starts:
- ✅ Downloads PHP 8.2 + Apache + MySQL
- ✅ Downloads WordPress latest
- ✅ Creates database (dundobi_wp)
- ✅ Configures wp-config.php
- ✅ Enables Apache modules
- ✅ Sets permissions
- ✅ Installs WP-CLI

### Step 3: WordPress is Ready

When terminal shows:

```
╔════════════════════════════════════════════════════════════════╗
║                  ✅ Setup Complete!                           ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  WordPress Location: /var/www/html                            ║
║  Database: dundobi_wp                                         ║
║  User: wordpress / password                                   ║
```

Click the **Ports** tab and open the HTTP link (port 80).

### Step 4: Complete WordPress Setup

You'll see WordPress installer:

```
1. Language: English
2. Site Title: Dundobi
3. Admin username: admin
4. Admin password: (create one)
5. Email: your@email.com
6. Click "Install WordPress"
```

Done!

---

## What's Running

Inside Codespaces container:

```
✅ PHP 8.2 with WordPress extensions
✅ Apache 2.4 with mod_rewrite enabled
✅ MySQL 8.0 with database ready
✅ WP-CLI for command-line WordPress management
✅ WordPress core files downloaded + extracted
✅ wp-config.php configured automatically
```

---

## Next Steps After Setup

### Install Plugins

WordPress Admin → Plugins → Add New

Install (all free):
- WooCommerce
- Advanced Custom Fields Free
- Contact Form 7

### Scrape Dundobi Data

In Codespaces terminal:

```bash
node scripts/scrape-dundobi.js
```

Creates: `dundobi-data/json/dundobi-data.json` + images

### Import Products

(Script ready - will import to WordPress)

### Commit to GitHub

```bash
git add .
git commit -m "Add products from dundobi.com"
git push origin master
```

---

## Useful Commands

### WordPress CLI

```bash
# Check WordPress status
wp core is-installed

# Create new post type
wp scaffold post-type puppy

# List all posts
wp post list --post_type=puppy

# Check database
wp db check

# Export database
wp db export backup.sql
```

### MySQL

```bash
# Connect to MySQL
mysql -h 127.0.0.1 -u wordpress -p dundobi_wp

# Show tables
SHOW TABLES;

# Exit
exit
```

### Apache

```bash
# Check Apache status
apachectl status

# Restart Apache
sudo service apache2 restart
```

---

## Troubleshooting

### WordPress won't load

Check ports are forwarded:
- Open **Ports** tab in Codespaces
- Should see port 80 (HTTP) and 3306 (MySQL)
- Click the HTTP link to open WordPress

### MySQL error

Check MySQL is running:
```bash
mysql -h 127.0.0.1 -u wordpress -p dundobi_wp -e "SELECT 1;"
```

If error, restart:
```bash
sudo service mysql restart
```

### Need to see logs

```bash
# Apache logs
tail -f /var/log/apache2/error.log
tail -f /var/log/apache2/access.log

# WordPress debug
tail -f /var/www/html/wp-content/debug.log
```

---

## Cost

GitHub Codespaces provides **120 core-hours per month free**.

This setup uses ~2 core-hours per day of active development.

---

## That's It!

- No local setup needed
- No Docker knowledge required
- No database configuration
- No plugin installation
- Just open in Codespaces and work

**Everything is automated.** 🚀
