FROM mcr.microsoft.com/devcontainers/php:8.2-apache

# Install additional PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install MySQL client
RUN apt-get update && apt-get install -y mysql-client curl unzip && rm -rf /var/lib/apt/lists/*

# Enable Apache modules
RUN a2enmod rewrite && a2enmod headers

# Set up Apache DocumentRoot
ENV APACHE_DOCUMENT_ROOT=/var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Increase PHP memory limit for WordPress
RUN echo "memory_limit = 256M" >> /usr/local/etc/php/conf.d/wordpress.ini
RUN echo "upload_max_filesize = 100M" >> /usr/local/etc/php/conf.d/wordpress.ini
RUN echo "post_max_size = 100M" >> /usr/local/etc/php/conf.d/wordpress.ini

# Install WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp

WORKDIR /var/www/html

# Expose Apache
EXPOSE 80
