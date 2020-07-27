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
 * @param  {Object} props  Block props.
 * @return {?ReactElement} Block save JSX.
 */
const Save = ( props ) => {
	const {
		className,
	} = props;

	return (
		<div className={ className }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
