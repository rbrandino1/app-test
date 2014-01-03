'use strict';

describe('Service: routeService', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var routeService;
  beforeEach(inject(function (_routeService_) {
    routeService = _routeService_;
  }));

  it('should return some Routes', function () {
    routeService.findRoutesByStopName('lauro linhares').then(function(response){
      expect(response.data.length).toBeGreaterThan(2);
    });
  });

  it('should return some departure', function () {
    routeService.findDeparturesByRouteId(17).then(function(response){
      expect(response.data.length).toBeGreaterThan(2);
    });
  });//end it
});