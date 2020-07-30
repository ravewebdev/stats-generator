<?php
/**
 * Plugin Name:     Stats Generator
 * Description:     A block plugin extending the RAVE Dice Roller into a TTRPG Character Stats Generator.
 * Version:         1.0.0
 * Author:          R A Van Epps
 * Author URI:      https://ravanepps.com
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     stats-generator
 *
 * @package         Rave\StatsGenerator
 * @since           1.0.0
 */

namespace Rave\StatsGenerator;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Register the block with WordPress.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 */
function register_block() {

	// Define our assets.
	$editor_script   = 'build/index.js';
	$editor_style    = 'build/index.css';
	$frontend_style  = 'build/style-index.css';
	$frontend_script = 'build/frontend.js';

	// Verify we have an editor script.
	if ( ! file_exists( plugin_dir_path( __FILE__ ) . $editor_script ) ) {
		wp_die( esc_html__( 'Whoops! You need to run `npm run build` for the Rave Stats Generator first.', 'stats-generator' ) );
	}

	// Autoload dependencies and version.
	$asset_file = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	// Register editor script.
	wp_register_script(
		'rave-stats-generator-editor-script',
		plugins_url( $editor_script, __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// Register editor style.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $editor_style ) ) {
		wp_register_style(
			'rave-stats-generator-editor-style',
			plugins_url( $editor_style, __FILE__ ),
			[ 'wp-edit-blocks' ],
			filemtime( plugin_dir_path( __FILE__ ) . $editor_style )
		);
	}

	// Register frontend style.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $frontend_style ) ) {
		wp_register_style(
			'rave-stats-generator-style',
			plugins_url( $frontend_style, __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . $frontend_style )
		);
	}

	// Register block with WordPress.
	register_block_type( 'rave/stats-generator', array(
		'editor_script'   => 'rave-stats-generator-editor-script',
		'editor_style'    => 'rave-stats-generator-editor-style',
		'style'           => 'rave-stats-generator-style',
		'render_callback' => __NAMESPACE__ . '\render_block',
	) );

	// Register frontend script.
	if ( file_exists( plugin_dir_path( __FILE__ ) . $frontend_script ) ) {
		wp_enqueue_script(
			'rave-stats-generator-frontend-script',
			plugins_url( $frontend_script, __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}
}
add_action( 'init', __NAMESPACE__ . '\register_block' );

// Load frontend render via PHP.
require_once plugin_dir_path( __FILE__ ) . '/includes/frontend.php';
