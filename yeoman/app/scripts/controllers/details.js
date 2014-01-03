'use strict';

angular.module('testApp')
	.controller('DetailsCtrl', function ($scope, $routeParams, routeService, cacheService) {
		$scope.routeId = $routeParams.routeId;
		$scope.route = cacheService.get('route');

		routeService.findDeparturesByRouteId($scope.routeId).then(function(response){
			$scope.departures = response.data.rows;
		});
	}
);