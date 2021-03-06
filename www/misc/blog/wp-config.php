<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'socswordpress');

/** MySQL database username */
define('DB_USER', 'socsadmin');

/** MySQL database password */
define('DB_PASSWORD', 'cogs prog admin pw');

/** MySQL hostname */
define('DB_HOST', '156.56.91.5');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */

define('AUTH_KEY',         'H_%Y@G^ajz: !+N2hjWPD;jK0Z1S|M%{aAdszug>-Oo1$7tYYv/;)p1 $&=L-sD');
define('SECURE_AUTH_KEY',  'j~1>5G2H${>#rxFTO9PUlN*,+)T|5~JtCF-iH98F^#`gvMsFAwE8D;Y-]lj4mG>i');
define('LOGGED_IN_KEY',    '|O](;A10ZG:a:w 2{a~r4F.46r`UTD:!A>[I;X0[Lg4Pfc@)z>M|s{@s; d/3|');
define('NONCE_KEY',        '0G-hS/){$H,V%s::6X>9a@|1as^-Bc+|+XG+kau<m$zlRk?YE)RMA#}ZDn`T87aj');
define('AUTH_SALT',        'sW*dz8(RLXj.+%X:hK~b1Q_e&-{b3|V+s8@YZHDPAjJU/y?U8|9tjpjU0!gS8+i<');
define('SECURE_AUTH_SALT', 'KN+Tri+__UZQmTW^L)y09h|G<ab41xD#aaOh^|-tR?r$Cp=nQ$#7rLH+Ze:/|r?-');
define('LOGGED_IN_SALT',   'X,7fTC]VolTNFn&@)uXFF(?l/wTd*TDmkZ-uOXTz)fu#h!*O-E~b,Ck0-<d|+8S');
define('NONCE_SALT',       '3>+|t60,SnL9vh&#3r6t4~*-sKtw0T!G9Ay;y<x%:b-~(7}2Z5Oh44Oi;jX`l;r');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
