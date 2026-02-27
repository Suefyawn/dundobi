# Dundobi Development Workflow

How to work on the site locally and push to GitHub.

---

## Local Workflow

### 1. Start Your Local Environment

**Local by Flywheel:**
- Open Local app
- Click "Dundobi" site
- Click "Start Site"
- Click "Open Site" or visit http://dundobi.local

**Codespaces:**
- Open: https://github.com/suefyawn/dundobi/codespaces
- Terminal: `docker-compose up`
- Visit: http://localhost:8000

**XAMPP:**
- Start Apache + MySQL
- Visit: http://localhost/dundobi

### 2. Make Changes

**Via WordPress Admin:**
```
1. Add products (WooCommerce)
2. Edit posts/pages
3. Configure plugins
4. Manage media
```

**Via Code:**
```
Edit files in: wp-content/themes/dundobi-child/
- style.css (custom CSS)
- functions.php (PHP hooks)
- template-parts/ (custom layouts)
```

### 3. Test

```
Browse: http://dundobi.local
- Homepage
- Shop page
- Product pages
- Cart flow
- Checkout
- Mobile responsive
- Forms
```

---

## Version Control Workflow

### Clone the Repository

```bash
git clone https://github.com/suefyawn/dundobi.git
cd dundobi
```

### Create a Branch

```bash
git checkout -b feature/add-puppies
# or
git checkout -b bugfix/product-display
```

### Make Changes

Edit files locally, test in WordPress.

### Commit Changes

```bash
# See what changed
git status

# Add specific files
git add wp-content/themes/dundobi-child/style.css
git add scripts/import-products.php

# Or add all
git add .

# Commit
git commit -m "Add puppy product type and styling"

# Or detailed commit
git commit -m "Add puppy product type and styling

- Created ACF post type 'puppy'
- Added custom CSS for puppy cards
- Implemented health testing repeater
- Updated import script for products"
```

### Push to GitHub

```bash
git push origin feature/add-puppies
```

### Create Pull Request

On GitHub:
```
1. Go to your repo
2. See "Compare & pull request" button
3. Click it
4. Review changes
5. Create PR
6. Merge to main when ready
```

### After Merge

```bash
git checkout main
git pull origin main
```

---

## Common Tasks

### Add New Product (Puppy)

**Via WordPress Admin:**

1. Dashboard → Puppies (left menu)
2. Click "Add New"
3. Fill in:
   - Title: Puppy name
   - Description: About this puppy
   - Age: 8 months
   - Sex: Female
   - Color: Black & Rust
   - Price: 2500
   - Status: Available
   - Health Testing: Add test results
   - Gallery: Upload photos
4. Publish

**Via WP-CLI (command line):**

```bash
wp post create --post_type=puppy \
  --post_title="Bella" \
  --post_content="Beautiful black and rust female" \
  --post_status=publish
```

### Edit the Theme

Edit: `wp-content/themes/dundobi-child/style.css`

```css
/* Your custom CSS here */
.puppy-card {
  border: 1px solid #eee;
  padding: 20px;
}
```

Refresh browser - changes appear instantly.

### Add Custom Field

Edit: `wp-content/themes/dundobi-child/functions.php`

Add to `acf_add_local_field_group()` array:

```php
array(
    'key'       => 'field_puppy_weight',
    'label'     => 'Weight (lbs)',
    'name'      => 'puppy_weight',
    'type'      => 'number',
),
```

Refresh WordPress - field appears automatically.

### Create Custom Page Layout

Create: `wp-content/themes/dundobi-child/template-parts/page-puppies.php`

```php
<?php
// Custom layout for puppies archive page
get_header(); ?>

<div class="puppies-archive">
    <h1>Available Puppies</h1>
    
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            // Display each puppy
            echo '<div class="puppy-card">';
            the_title( '<h2>', '</h2>' );
            the_excerpt();
            echo '</div>';
        endwhile;
    endif;
    ?>
</div>

<?php get_footer();
```

### Import Products from CSV

Create: `scripts/import-dundobi.php`

```php
<?php
// WP-CLI command to import products

$file = 'dundobi-products.csv';
$products = array_map('str_getcsv', file($file));

foreach ( $products as $product ) {
    wp_insert_post( array(
        'post_type'    => 'puppy',
        'post_title'   => $product[0],
        'post_content' => $product[1],
        'post_status'  => 'publish',
    ));
}

echo "Imported " . count($products) . " products";
```

Run:
```bash
wp eval-file scripts/import-dundobi.php
```

---

## Database Backup & Export

### Backup Database

**Local by Flywheel:**
- Local app → Dundobi → Database → Export

**XAMPP/Codespaces:**
```bash
# Export
mysqldump -u root dundobi_wp > backup.sql

# Import
mysql -u root dundobi_wp < backup.sql
```

---

## Git Workflow Summary

```bash
# Start
git clone https://github.com/suefyawn/dundobi.git
cd dundobi

# Create feature branch
git checkout -b feature/your-feature

# Make changes, test locally

# Commit
git add .
git commit -m "Description"

# Push
git push origin feature/your-feature

# On GitHub: Create PR → Review → Merge

# Update local
git checkout main
git pull origin main
```

---

## Deployment (When Ready)

See `DEPLOYMENT.md` for pushing to live server.

---

## Tips

- Commit often (small, meaningful commits)
- Write clear commit messages
- Test before pushing
- Keep secrets (passwords) out of Git
- Use `.gitignore` for local files
- Pull before pushing (avoid conflicts)

---

Questions? Check `SETUP.md` or `DEPLOYMENT.md`
