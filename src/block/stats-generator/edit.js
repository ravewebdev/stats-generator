/**
 * EDIT: Stats Generator Block
 */

import statDice from './statDice';

import './editor.scss';

const {
	i18n: {
		__,
	},
	blockEditor: {
		InnerBlocks,
	},
} = wp;

/**
 * Get stat heading block props based on counter value.
 *
 * @author R A Van Epps <rave@ravanepps.com>
 * @since  1.0.0
 *
 * @param  {number} count Counter value.
 * @return {Object}       Stat heading props.
 */
const getDiceHeadingProps = ( count ) => {
	let heading = '',
		abbr = '';

	switch ( count ) {
		case 0:
			heading = __( 'Strength', 'stats-generator' );
			abbr = __( 'STR', 'stats-generator' );
			break;

		case 1:
			heading = __( 'Dexterity', 'stats-generator' );
			abbr = __( 'DEX', 'stats-generator' );
			break;

		case 2:
			heading = __( 'Constitution', 'stats-generator' );
			abbr = __( 'CON', 'stats-generator' );
			break;

		case 3:
			heading = __( 'Intelligence', 'stats-generator' );
			abbr = __( 'INT', 'stats-generator' );
			break;

		case 4:
			heading = __( 'Wisdom', 'stats-generator' );
			abbr = __( 'WIS', 'stats-generator' );
			break;

		case 5:
			heading = __( 'Charisma', 'stats-generator' );
			abbr = __( 'CHA', 'stats-generator' );
			break;
	}

	if ( ! heading.length ) {
		return {};
	}

	return {
		className: `ability ${ heading.toLowerCase() }`,
		content: `${ heading } (${ abbr })`,
		level: '4',
	};
};

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
		template.push( [ 'core/heading', getDiceHeadingProps( i ) ] );
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
