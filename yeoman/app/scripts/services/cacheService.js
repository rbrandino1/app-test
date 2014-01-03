'use strict';

angular.module('testApp')
	.service('cacheService', function cacheService($cacheFactory) {
		return $cacheFactory('appCache');
	}
);