#!/bin/sh
#set -e
if [ -d web/sites/default ]; then
  chmod 777 web/sites/default
fi

chmod 777 web/sites/default/settings.php
chmod 777 web/sites/default/services.yml

# Copy the environment-specific settings-file to settings.local.
if [ -f .settings/"${ENV}".settings.local.php ]; then
    echo "Copying settings local to default folder"
    cp .settings/"${ENV}".settings.local.php web/sites/default/settings.local.php
    chmod 777 web/sites/default/settings.local.php
fi

# Copy the environment-specific settings-file to settings.local.
if [ -f .settings/"${ENV}".drush.yml ]; then
    echo "Copying drush.yml to default folder"
    cp .settings/"${ENV}".drush.yml drush/drush.yml
fi

if [ "${ENV}" = 'dev' ];then
  # Prepare the files directory for installation
  if [ ! -d web/sites/default/files ];then
    mkdir -m777 web/sites/default/files
  fi
fi
