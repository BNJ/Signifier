(function (signifier) {
  'use strict';

  signifier.filter('formatTel', function () {
    return function (input) {
      input = input || '';
      return input.replace(/[^0-9]+/g, '');
    };
  });

  signifier.filter('displayTel', function () {
    return function (input) {
      input = input || '';
      input = input.replace(/[^0-9]+/g, '');
      var out = [input.slice(-4)];
      input = input.slice(0, -4);

      while (input.length) {
        out.unshift(input.slice(-3));
        input = input.slice(0, -3);
      }

      return out.join('.');
    };

  });

  signifier.controller('FormControl', function ($scope) {
    $scope.signatureTypeOptions = ['text', 'image'];
    $scope.signatureType = 'image';

     $scope.name = 'Mike Boogaard';
     $scope.title = 'managing director, uk + emea';
     $scope.email = 'mikeb';
     $scope.mtel = '07506559507';
     $scope.otel = '02074276083';
     $scope.twitter = 'mikeboogaard';
     $scope.linkedin = 'mikeboogaard';
  });

})(angular.module('Signifier', []));
