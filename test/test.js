const Ractive = require('ractive')
const lazy = require('../')

new Ractive({
	el: '#content',
	template: '#template',
	decorators: {
		lazy
	},
	data: () => ({
		numbers: [ 1, 2, 3, 4, 5, 6, 7 ]
	})
})
