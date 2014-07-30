var Signifier = angular.module('Signifier', [])

.filter('formatTel', function () {
	return function( input ) {
		input = input || '';
		return input.replace(/[^0-9]+/g,'');
	}
})
.controller('FormControl', function($scope) {
});
