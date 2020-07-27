/**
 * EDIT: Stats Generator Block
 */

import statDice from './statDice';

const {
	blockEditor: {
		InnerBlocks,
	},
} = wp;

/**
 * Set up InnerBlocks template prop.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @return {Array} Template prop config array.
 */
const getInnerBlocksTemplate = () => {
	const template = [];

	for ( let i = 0; 6 > i; i++ ) {
		template.push( [ ...statDice ] );
	}

	return template;
};

// Set up InnerBlocks props.
const innerBlocksProps = {
	allowedBlocks: [ 'rave/dice-roller' ],
	templateLock: 'all',
	template: getInnerBlocksTemplate(),
};

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
