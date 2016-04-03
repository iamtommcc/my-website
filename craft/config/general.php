<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
    'devMode' => true,
    'omitScriptNameInUrls' => true,
    'siteUrl' => 'http://192.168.33.10/',
    'environmentVariables' => array(
      'basePath' => '/var/www/public/',
      'baseUrl'  => 'http://192.168.33.10/',
    ),
    'testToEmailAddress' => 'dev@email.com',
  ),
);
