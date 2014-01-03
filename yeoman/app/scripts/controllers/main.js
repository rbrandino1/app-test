/*global $ */
'use strict';

angular.module('testApp')
	.controller('MainCtrl', function ($scope, $location, routeService, cacheService) {

		$scope.filter = cacheService.get('filter');
		$scope.routes = cacheService.get('routes');

		if($scope.routes && $scope.routes.length > 0){
			$('.list-group').show();
			$('.initial-text').hide();
		}

		$scope.search = function() {
			routeService.findRoutesByStopName($scope.filter).then(function(response){
				$scope.routes = response.data.rows;
				cacheService.put('routes', $scope.routes);
				cacheService.put('filter', $scope.filter);
			});
		};

		$scope.viewRouteDetails = function(route) {
			//TODO implement spinner loader
			cacheService.put('route', route);
			$location.path('details/'+route.id);
		};

		$scope.viewMap = function() {
			//TODO implement spinner loader
			$location.path('/mapView');
		};
	});