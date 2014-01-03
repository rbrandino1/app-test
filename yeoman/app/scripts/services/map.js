/*global google */
'use strict';

angular.module('testApp')
	.service('Map', function( $rootScope , $compile ){

	var canvas   = document.getElementById('map-canvas'),
	defaults = {
		center:    new google.maps.LatLng(-27.595935, -48.547425),
		zoom:      12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	return {
		init: function( scope ) {
			var mapOpts = {
				'center':    defaults.center,
				'zoom':      defaults.zoom,
				'mapTypeId': defaults.mapTypeId
			};

			var map = $rootScope.map = new google.maps.Map( canvas , mapOpts );
			var geocoder = new google.maps.Geocoder();
			var infowindow = new google.maps.InfoWindow();
			var marker;

			google.maps.event.addListener(map, 'click', function(e) {
				geocoder.geocode(
					{'latLng': e.latLng},
					function(results, status) {
						if (status === google.maps.GeocoderStatus.OK) {
							if (results[0]) {
								if (marker) {
									marker.setPosition(e.latLng);
								} else {
									marker = new google.maps.Marker({
										position: e.latLng,
										map: map
									});
								}
								var content = '<div id="infowindow_content" ng-include src="\'/views/infowindow.html\'"></div>';
								/*jshint camelcase: false */
								scope.streetName = results[0].formatted_address;
								var compiled = $compile(content)(scope);
								scope.$apply();
								console.log(compiled[0].nextSibling);
								infowindow.setContent(compiled[0].nextSibling);
								infowindow.open(map, marker);
							} else {
								document.getElementById('geocoding').innerHTML = 'No results found';
							}
						} else {
							document.getElementById('geocoding').innerHTML = 'Geocoder failed due to: ' + status;
						}
					}
				);//geoCode()
			});//addListener()			
		}//ini
	};//return
});//