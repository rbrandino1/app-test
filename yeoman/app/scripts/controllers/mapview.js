/*global goBack */
'use strict';

angular.module('testApp')
	.controller('MapviewCtrl', function ($scope, $location, cacheService, Map, routeService) {
	Map.init($scope);

	$scope.searchByMap = function(streetName) {
		if(streetName){
			streetName = streetName.substring(0, streetName.indexOf(','));
			routeService.findRoutesByStopName(streetName).then(function(response){
				cacheService.put('routes', response.data.rows);
				cacheService.put('filter', streetName);
			});
			goBack();
		}
	};
});