/**
 * SAVE: Stats Generator Block
 */

const {
	blockEditor: {
		RichText,
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
		attributes: {
			content,
		},
		className,
	} = props;

	return (
		<RichText.Content
			className={ className }
			tagName="p"
			value={ content }
		/>
	);
};

export default Save;
