# Используем официальный образ WordPress
FROM wordpress:latest

# Устанавливаем необходимые пакеты
RUN apt-get update && apt-get install -y \
    libzstd-dev zlib1g-dev unzip build-essential \
    && pecl install redis \
    && echo "extension=redis.so" > /usr/local/etc/php/conf.d/redis.ini \
    && docker-php-ext-enable redis \
    && apt-get remove -y build-essential \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar /usr/local/bin/wp

# Копируем файл .env
# COPY .env /var/www/html/.env

# Добавляем скрипт для автоматической настройки
# COPY setup.sh /usr/local/bin/setup.sh
# RUN chmod +x /usr/local/bin/setup.sh

# Открываем порт
EXPOSE 80

CMD ["apache2-foreground"]
