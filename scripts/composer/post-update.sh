#!/bin/bash
#set -e
ENV="${ENV:-dev}"

chmod +w web/sites/default

# Prepare the services file for installation
if [ ! -f web/sites/default/settings.local.php ];then
  if [ -f settings/${ENV}.settings.local.php ];then
      echo "Copying env.settings.local.php to default folder."
      chmod +w web/sites/default/settings.local.php
      cp .settings/${ENV}.settings.local.php web/sites/default/settings.local.php
  fi
fi

if [ "${ENV}" = 'dev' ];then
  cp web/core/.eslintrc.json .eslintrc.core.json
  cp web/core/.eslintrc.legacy.json .eslintrc.legacy.json
fi
