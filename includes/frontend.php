<?php
/**
 * Render block contents on frontend.
 *
 * @package Rave\StatsGenerator
 * @author  R A Van Epps <rave@ravanepps.com>
 * @since   1.0.0
 */

namespace Rave\StatsGenerator;

/**
 * Render stats generator block on frontend.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  array  $attributes Block attributes.
 * @param  string $content    Saved block HTML content.
 * @return string             Block HTML to render.
 */
function render_block( array $attributes, string $content ) : string {
	$class = 'wp-block-rave-stats-generator';

	ob_start();
	?>

	<div class="<?php echo esc_attr( $class ); ?>">
		<button class="roll-all-dice" type="button">
			<?php esc_html_e( 'Roll Dice', 'character-generator' ); ?>
		</button>
		<?php echo wp_kses_post( $content ); ?>
	</div> 

	<?php
	return ob_get_clean();
}
