/**
 * SAVE: Stats Generator Block
 */

const {
	blockEditor: {
		InnerBlocks,
	},
} = wp;

/**
 * Handle save functionality in the admin.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @return {?ReactElement} Block save JSX.
 */
const Save = () => {
	return (
		<InnerBlocks.Content />
	);
};

export default Save;
