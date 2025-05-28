#!/bin/bash

# Ожидание запуска MySQL
echo "Ожидание запуска базы данных..."
until wp db check --allow-root; do sleep 2; done

# Установка WordPress
if ! wp core is-installed --allow-root; then
    wp core install --url="$WP_URL" --title="$WP_TITLE" --admin_user="$WP_ADMIN_USER" --admin_password="$WP_ADMIN_PASS" --admin_email="$WP_ADMIN_EMAIL" --allow-root
fi

# Создание дополнительного администратора (если указаны переменные)
if [ -n "$WP_SECOND_ADMIN" ] && [ -n "$WP_SECOND_ADMIN_EMAIL" ] && [ -n "$WP_SECOND_ADMIN_PASS" ]; then
    wp user create "$WP_SECOND_ADMIN" "$WP_SECOND_ADMIN_EMAIL" --role=administrator --user_pass="$WP_SECOND_ADMIN_PASS" --allow-root
fi

# Установка и активация WooCommerce
wp plugin install woocommerce --activate --allow-root

# Настройка структуры ссылок для WooCommerce
wp rewrite structure '/shop/%postname%/' --allow-root
wp rewrite flush --allow-root

# Установка основных параметров
wp option update timezone_string "$WP_TIMEZONE" --allow-root
wp option update blogdescription "$WP_DESCRIPTION" --allow-root

echo "✅ WordPress настроен и готов к работе!"

# Запуск Apache
exec apache2-foreground
