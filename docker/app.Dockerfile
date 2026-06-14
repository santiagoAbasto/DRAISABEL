FROM php:8.3-fpm

WORKDIR /opt/app-source

RUN apt-get update && apt-get install -y \
    git curl rsync zip unzip libpng-dev libonig-dev libxml2-dev \
    libpq-dev libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY docker/app-entrypoint.sh /usr/local/bin/app-entrypoint
RUN chmod +x /usr/local/bin/app-entrypoint

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

COPY src/ /opt/app-source/

RUN composer install --no-interaction --prefer-dist && \
    npm ci && \
    npm run build && \
    find /opt/app-source -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | awk '{print $1}' > /opt/app-source/.image-sync-id

ENTRYPOINT ["/usr/local/bin/app-entrypoint"]
CMD ["php-fpm"]
