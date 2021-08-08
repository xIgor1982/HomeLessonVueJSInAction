'use strict';

function isNotNumberValue(value) {
	return isNaN(value) || !isFinite(value);
}

let calc = new Vue({
	el: '#app',
	data: {
		x: 0,
		y: 0,
		lastResult: 0
	},
	computed: {
		result: function () {
			let x = parseFloat(this.x);
			if(isNotNumberValue(this.x)) return this.lastResult;

			let y = parseFloat(this.y);
			if(isNotNumberValue(this.y)) return this.lastResult;

			this.lastResult = x + y;

			return this.lastResult;
		}
	}
});