/**
 * Define default stat dice props.
 */

const {
	i18n: {
		__,
	},
} = wp;

const statDice = [ 'rave/dice-roller', {
	dice: {
		d100: {
			label: __( 'D100', 'stats-generator' ),
			number: 0,
		},
		d20: {
			label: __( 'D20', 'stats-generator' ),
			number: 0,
		},
		d12: {
			label: __( 'D12', 'stats-generator' ),
			number: 0,
		},
		d10: {
			label: __( 'D10', 'stats-generator' ),
			number: 0,
		},
		d8: {
			label: __( 'D8', 'stats-generator' ),
			number: 0,
		},
		d6: {
			label: __( 'D6', 'stats-generator' ),
			number: 4,
			multiDieFn: 'sum-highest',
		},
		d4: {
			label: __( 'D4', 'stats-generator' ),
			number: 0,
		},
		d2: {
			label: __( 'D2', 'stats-generator' ),
			number: 0,
		},
	},
} ];

export default statDice;
