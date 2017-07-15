'use strict';

angular.module('contactPage').controller('ContactPageController', ['$scope', '$http', function($scope, $http) {

$scope.updateFrom = function () {
    $scope.from = ($scope.name || '') + ' <' + ($scope.email || '') + '>';
};
}]);