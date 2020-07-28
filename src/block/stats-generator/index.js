/**
 * BLOCK: Stats Generator.
 *
 * Register Stats Generator.
 */

import edit from './edit';
import save from './save';

import './style.scss';

const {
	i18n: {
		__,
	},
	blocks: {
		registerBlockType,
	},
} = wp;

registerBlockType( 'rave/stats-generator', {
	title: __( 'Stats Generator', 'stats-generator' ),
	icon: 'list-view',
	category: 'widgets',
	keywords: [
		__( 'Rave', 'stats-generator' ),
		__( 'stats generator, rpg, character builder', 'stats-generator' ),
	],
	supports: {
		html: false,
	},
	attributes: {},
	edit,
	save,
} );
