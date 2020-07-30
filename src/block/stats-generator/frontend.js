/**
 * FRONTEND: Stats Generator Block
 */

const blockClass = '.wp-block-rave-stats-generator',
	blocks = document.querySelectorAll( blockClass );

/**
 * Retrieve and re-render blocks.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} block Block DOM element.
 */
blocks.forEach( ( block ) => {
	const rollAllButton = block.querySelector( '.roll-all-dice' );

	rollAllButton.addEventListener( 'click', () => {
		block.querySelectorAll( 'button.roll-dice' ).forEach( ( button ) => {
			button.click();
		} );
	} );
} );
