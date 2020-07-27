/**
 * EDIT: Stats Generator Block
 */

const {
	i18n: {
		__,
	},
	blockEditor: {
		RichText,
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
		attributes: {
			content,
		},
		className,
		setAttributes,
	} = props;

	/**
	 * Handle updating attributes.
	 *
	 * @author R A Van Epps <rave@ravanepps.com>
	 * @since  1.0.0
	 *
	 * @param  {string} attribute Attribute name.
	 * @param  {mixed}  value     New value for attribute.
	 */
	const onUpdate = ( attribute, value ) => {
		setAttributes( {
			[ attribute ]: value,
		} );
	};

	return (
		<RichText
			tagName="p"
			className={ className }
			onChange={ onUpdate }
			value={ content }
			placeholder={ __( 'Rave Stats Generator Demo...', 'stats-generator' ) }
		/>
	);
};

export default Edit;
