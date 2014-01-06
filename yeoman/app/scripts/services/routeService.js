'use strict';

angular.module('testApp')
.service('routeService', function ($http) {
	this.findRoutesByStopName = function(stopName) {
		var promise = $http({
			method : 'POST',
			url : 'https://dashboard.appglu.com/v1/queries/findRoutesByStopName/run',
			data: {'stopName': stopName},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==',
				'X-AppGlu-Environment': 'staging'
			}
		}).success(function(data) {
			return data;
		}).catch(function(){
			console.error('Service Error');
			return $http.get('data/routes.json');
		});
		return promise;
	};

	this.findDeparturesByRouteId = function(routeId) {
		var promise = $http({
			method : 'POST',
			url : 'https://dashboard.appglu.com/v1/queries/findDeparturesByRouteId/run',
			data: {'routeId':routeId},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==',
				'X-AppGlu-Environment': 'staging'
			}
		}).success(function(data) {
			return data;
		}).catch(function(){
			console.error('Service Error');
			return $http.get('data/departures.json');
		});
		return promise;
	};
});