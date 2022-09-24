<?php
/**
 * Vite plugin for Craft CMS 3.x
 *
 * Allows the use of the Vite.js next generation frontend tooling with Craft CMS
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2021 nystudio107
 */

use craft\helpers\App;

return [
    'useDevServer' => App::env('DEV_MODE'),
    'manifestPath' => '@webroot/dist/manifest.json',
    'devServerPublic' => App::env('PRIMARY_SITE_URL') . ':3000',
    'devServerInternal' => 'http://localhost:3000',
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'checkDevServer' => true,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
];
