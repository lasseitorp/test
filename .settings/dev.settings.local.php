<?php
// Dev only settings
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/theme-development.services.yml';
$config['system.logging']['error_level'] = 'verbose';
$settings['skip_permissions_hardening'] = TRUE;
$settings['rebuild_access'] = TRUE;
$settings['hash_salt'] = 'dh7eF3frqFlRXhIT1_JYyGK8jDM_gAUoX8-P4Mhdfu4El2Rv4UUQGsv9BVUeFzKFfBooFRmntgQ';

$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

$settings['extension_discovery_scan_tests'] = FALSE;

$databases['default']['default'] = [
  'database' => 'drupal9',
  'username' => 'drupal9',
  'password' => 'drupal9',
  'prefix' => '',
  'host' => 'database',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
  'charset' => 'utf8mb4',
  'collation' => 'utf8mb4_swedish_ci',
];

$settings['trusted_host_patterns'] = [
  'rise.lndo.site'
];