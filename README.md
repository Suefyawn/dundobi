# Dundobi WordPress Migration

WordPress ecommerce site for Dundobi (working European Doberman breeding program).

**Status:** Development (Local → GitHub → Live Server)

---

## Project Overview

**From:** Shopify site (dundobi.com)  
**To:** WordPress + GeneratePress + WooCommerce + ACF  
**Stack:** Free plugins only, version-controlled on GitHub

---

## Features

- ✅ Product catalog (Puppies, Breeding Dogs, Past Litters)
- ✅ Advanced Custom Fields (ACF Free) for breeding metadata
- ✅ WooCommerce ecommerce
- ✅ Responsive GeneratePress theme
- ✅ Payment processing (Stripe/PayPal)
- ✅ Contact forms
- ✅ SEO-friendly structure

---

## Development Setup

### Option 1: Local by Flywheel

```bash
1. Download Local by Flywheel (free)
2. Create new WordPress site: dundobi
3. Admin: admin / password
4. Domain: dundobi.local
5. PHP 8.x, MySQL 8.0
```

### Option 2: GitHub Codespaces (Cloud)

```bash
# Open in Codespaces
GitHub → Code → Codespaces → Create codespace

# In terminal
docker-compose up

# Access: http://localhost:8000
```

### Option 3: XAMPP (Manual)

```bash
1. Install XAMPP
2. Create folder: htdocs/dundobi/
3. Extract WordPress there
4. MySQL: create db dundobi
5. Visit: localhost/dundobi
```

---

## Project Structure

```
dundobi/
├── wp-content/
│   ├── themes/
│   │   └── dundobi-child/           (GeneratePress child theme)
│   │       ├── style.css            (custom styles)
│   │       ├── functions.php        (hooks, ACF setup)
│   │       └── template-parts/      (custom layouts)
│   └── plugins/                     (free plugins)
├── scripts/
│   ├── scrape-dundobi.js            (scrape existing site)
│   ├── import-products.php          (WP-CLI data import)
│   └── setup-acf-fields.php         (field definitions)
├── docs/
│   ├── SETUP.md                     (detailed setup guide)
│   ├── ACF-FIELDS.md                (field structure)
│   ├── DEPLOYMENT.md                (push to live server)
│   └── DEVELOPMENT.md               (local workflow)
├── .github/
│   └── workflows/
│       └── deploy.yml               (GitHub Actions - optional)
├── .gitignore
├── README.md                        (this file)
└── docker-compose.yml               (for Codespaces)
```

---

## Installation

### WordPress (if not using Local/Codespaces)

1. Download latest WordPress from wordpress.org
2. Extract to this directory
3. Create database `dundobi_wp`
4. Configure `wp-config.php`
5. Run WordPress installation

### Plugins (via WordPress Admin)

Install these free plugins:
- WooCommerce
- Advanced Custom Fields Free (ACF)
- Contact Form 7
- Yoast SEO Free
- UpdraftPlus (backups)
- Wordfence Security

### Theme

1. Download GeneratePress (free) from WordPress.org
2. Activate it
3. Create child theme in `wp-content/themes/dundobi-child/`
4. All customizations go in child theme

---

## ACF Field Structure

### Puppy Post Type

```
- Name (text)
- Age (number - months)
- Sex (radio: Male/Female)
- Color (select: predefined options)
- Price (number)
- Health Testing (repeater)
  - Test name
  - Result
  - Date tested
- Pedigree (repeater)
  - Generation level
  - Sire name
  - Dam name
- Photo Gallery (gallery)
- Description (wysiwyg)
- Status (select: Available/Reserved/Sold/Past Litter)
- Contact Email (email)
```

### Breeding Dog Post Type

```
- Name (text)
- Service (text)
- Stud Fee (number)
- Health Testing (repeater)
- Achievements (repeater)
- Photo Gallery (gallery)
- Available (yes/no)
```

See `docs/ACF-FIELDS.md` for complete structure.

---

## Data Import

### From dundobi.com

```bash
# Scrape existing site
node scripts/scrape-dundobi.js
# Creates: dundobi-data.json, images/

# Import to WordPress
wp plugin install advanced-custom-fields-free --activate
php scripts/import-products.php
```

---

## Development Workflow

### Local Changes

```bash
# Edit files in dundobi-child theme or create new post types
# Test locally

# Version control
git add .
git commit -m "Description of changes"
git push origin main
```

### Testing

- Browse: http://dundobi.local (or localhost:8000 in Codespaces)
- Admin: http://dundobi.local/wp-admin
- phpMyAdmin: Check Local app for access

---

## Deployment

### Push to Live Server

See `docs/DEPLOYMENT.md` for:
- Server setup (Bluehost, Kinsta, DigitalOcean, etc.)
- Clone from GitHub
- Database migration
- DNS setup
- SSL certificate

---

## Configuration

### wp-config.php

Create locally (not in repo):
```php
define('DB_NAME', 'dundobi_wp');
define('DB_USER', 'dundobi_user');
define('DB_PASSWORD', 'your_password');
define('DB_HOST', 'localhost');
```

### WooCommerce Settings

- Shop page: Products
- Checkout URL: /checkout/
- Payments: Stripe / PayPal (free accounts)

---

## Troubleshooting

### WordPress won't load
- Check wp-config.php database settings
- Verify MySQL is running (Local app)
- Clear browser cache

### Plugins not showing
- Ensure wp-content/plugins/ exists
- Check file permissions (777 for /uploads)
- Try deactivate/reactivate

### Data import failing
- Check ACF fields created first
- Verify CSV format matches schema
- Check WP-CLI errors

---

## Contributing

1. Clone/pull this repo
2. Create new branch: `git checkout -b feature/your-feature`
3. Make changes
4. Test locally
5. Commit: `git commit -m "description"`
6. Push: `git push origin feature/your-feature`
7. Create Pull Request

---

## Support

See docs/ folder for detailed guides:
- `SETUP.md` — Installation & configuration
- `DEVELOPMENT.md` — Local workflow
- `DEPLOYMENT.md` — Going live
- `ACF-FIELDS.md` — Field structure reference

---

## License

MIT — Use freely, give credit where it's due.

---

**Built with:**
- WordPress (free)
- GeneratePress (free theme)
- WooCommerce (free)
- ACF Free (free custom fields)
- GitHub (free repo)

**Zero paid dependencies. Total control. Easy to scale.**
