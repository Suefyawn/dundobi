<?php
/**
 * Dundobi Child Theme Functions
 * 
 * ACF post types, custom functionality, hooks
 */

// Enqueue parent theme style
add_action( 'wp_enqueue_scripts', function() {
    wp_enqueue_style( 'generatepress-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'dundobi-child-style', get_stylesheet_directory_uri() . '/style.css', array( 'generatepress-style' ) );
});

// ============================================================================
// ACF Post Types - Puppies
// ============================================================================

add_action( 'init', function() {
    
    // Puppies Post Type
    if ( function_exists( 'acf_register_block_type' ) ) {
        register_post_type( 'puppy', array(
            'label'       => 'Puppies',
            'public'      => true,
            'has_archive' => true,
            'rewrite'     => array( 'slug' => 'puppies' ),
            'supports'    => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
            'menu_icon'   => 'dashicons-pets',
            'show_in_rest' => true,
        ));
    }

    // Breeding Dogs Post Type
    register_post_type( 'breeding_dog', array(
        'label'       => 'Breeding Dogs',
        'public'      => true,
        'has_archive' => true,
        'rewrite'     => array( 'slug' => 'breeding-dogs' ),
        'supports'    => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'menu_icon'   => 'dashicons-heart',
        'show_in_rest' => true,
    ));

    // Past Litters Post Type
    register_post_type( 'past_litter', array(
        'label'       => 'Past Litters',
        'public'      => true,
        'has_archive' => true,
        'rewrite'     => array( 'slug' => 'litters' ),
        'supports'    => array( 'title', 'editor', 'thumbnail' ),
        'menu_icon'   => 'dashicons-admin-post',
        'show_in_rest' => true,
    ));
});

// ============================================================================
// ACF Fields - Puppy Post Type
// ============================================================================

add_action( 'acf/init', function() {
    
    if ( ! function_exists( 'acf_add_local_field_group' ) ) {
        return;
    }

    acf_add_local_field_group( array(
        'key'      => 'group_dundobi_puppy',
        'title'    => 'Puppy Details',
        'fields'   => array(
            array(
                'key'       => 'field_puppy_age',
                'label'     => 'Age (months)',
                'name'      => 'puppy_age',
                'type'      => 'number',
                'required'  => 1,
            ),
            array(
                'key'       => 'field_puppy_sex',
                'label'     => 'Sex',
                'name'      => 'puppy_sex',
                'type'      => 'radio',
                'choices'   => array(
                    'male'   => 'Male',
                    'female' => 'Female',
                ),
                'required'  => 1,
            ),
            array(
                'key'       => 'field_puppy_color',
                'label'     => 'Color',
                'name'      => 'puppy_color',
                'type'      => 'select',
                'choices'   => array(
                    'black'        => 'Black',
                    'red'          => 'Red',
                    'blue'         => 'Blue',
                    'fawn'         => 'Fawn',
                    'black-rust'   => 'Black & Rust',
                    'red-rust'     => 'Red & Rust',
                ),
            ),
            array(
                'key'       => 'field_puppy_price',
                'label'     => 'Price ($)',
                'name'      => 'puppy_price',
                'type'      => 'number',
                'required'  => 1,
            ),
            array(
                'key'       => 'field_puppy_status',
                'label'     => 'Status',
                'name'      => 'puppy_status',
                'type'      => 'select',
                'choices'   => array(
                    'available' => 'Available',
                    'reserved'  => 'Reserved',
                    'sold'      => 'Sold',
                ),
                'default_value' => 'available',
            ),
            array(
                'key'       => 'field_puppy_health',
                'label'     => 'Health Testing',
                'name'      => 'puppy_health_testing',
                'type'      => 'repeater',
                'sub_fields' => array(
                    array(
                        'key'   => 'field_health_test_name',
                        'label' => 'Test Name',
                        'name'  => 'test_name',
                        'type'  => 'text',
                    ),
                    array(
                        'key'   => 'field_health_test_result',
                        'label' => 'Result',
                        'name'  => 'test_result',
                        'type'  => 'text',
                    ),
                    array(
                        'key'   => 'field_health_test_date',
                        'label' => 'Date',
                        'name'  => 'test_date',
                        'type'  => 'date_picker',
                    ),
                ),
            ),
            array(
                'key'       => 'field_puppy_gallery',
                'label'     => 'Photo Gallery',
                'name'      => 'puppy_gallery',
                'type'      => 'gallery',
            ),
            array(
                'key'       => 'field_puppy_contact',
                'label'     => 'Contact Email',
                'name'      => 'puppy_contact_email',
                'type'      => 'email',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'puppy',
                ),
            ),
        ),
    ));

    // Breeding Dogs Fields
    acf_add_local_field_group( array(
        'key'      => 'group_dundobi_breeding_dog',
        'title'    => 'Breeding Dog Details',
        'fields'   => array(
            array(
                'key'       => 'field_stud_fee',
                'label'     => 'Stud Fee ($)',
                'name'      => 'stud_fee',
                'type'      => 'number',
            ),
            array(
                'key'       => 'field_available',
                'label'     => 'Currently Available',
                'name'      => 'is_available',
                'type'      => 'true_false',
            ),
            array(
                'key'       => 'field_breeding_health',
                'label'     => 'Health Testing',
                'name'      => 'breeding_health_testing',
                'type'      => 'repeater',
                'sub_fields' => array(
                    array(
                        'key'   => 'field_breeding_test_name',
                        'label' => 'Test Name',
                        'name'  => 'test_name',
                        'type'  => 'text',
                    ),
                    array(
                        'key'   => 'field_breeding_test_result',
                        'label' => 'Result',
                        'name'  => 'test_result',
                        'type'  => 'text',
                    ),
                ),
            ),
            array(
                'key'       => 'field_breeding_gallery',
                'label'     => 'Photo Gallery',
                'name'      => 'breeding_gallery',
                'type'      => 'gallery',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'breeding_dog',
                ),
            ),
        ),
    ));
});

// ============================================================================
// Custom Product Archive Titles
// ============================================================================

add_filter( 'the_archive_title', function( $title ) {
    if ( is_post_type_archive( 'puppy' ) ) {
        return 'Available Puppies';
    }
    if ( is_post_type_archive( 'breeding_dog' ) ) {
        return 'Breeding Dogs';
    }
    return $title;
});

// ============================================================================
// WooCommerce Integration
// ============================================================================

add_filter( 'woocommerce_enqueue_styles', function() {
    return array();
});

// Custom checkout fields
add_action( 'woocommerce_checkout_process', function() {
    if ( isset( $_POST['post_data'] ) ) {
        parse_str( $_POST['post_data'], $post_data );
    }
});

// ============================================================================
// Custom Hooks/Filters
// ============================================================================

// Allow SVG uploads
add_filter( 'upload_mimes', function( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});

// Remove admin bar for better UX
add_action( 'wp_before_admin_bar_render', function() {
    if ( ! current_user_can( 'manage_options' ) ) {
        remove_action( 'wp_footer', 'wp_admin_bar_render', 1000 );
    }
});
