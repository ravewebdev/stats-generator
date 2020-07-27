/**
 * EDIT: Stats Generator Block
 */

const {
	blockEditor: {
		InnerBlocks,
	},
} = wp;

/**
 * Handle edit functionality in the admin.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {Object} props Block props.
 * @return {ReactElement} Block edit JSX.
 */
const Edit = ( props ) => {
	const {
		className,
	} = props;

	return (
		<div className={ className }>
			<InnerBlocks { ...innerBlocksProps } />
		</div>
	);
};

export default Edit;
