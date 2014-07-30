var Signifier = angular.module('Signifier', [])

.filter('formatTel', function () {
	return function( input ) {
		input = input || '';
		return input.replace(/[^0-9]+/g,'');
	};
})
.filter('displayTel', function() {
	return function(input) {
		input = input || '';
		input = input.replace(/[^0-9]+/g, '');
		var out = input.slice(-4);
		input = input.slice(0, -4);
		while (input.length) {
			var part = input.slice(-3);
			input = input.slice(0, -3);
			out = part + " " + out;
		}
		return out;
	};

})
.controller('FormControl', function($scope) {
});
