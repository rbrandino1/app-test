'use strict';

describe('Service: Cacheservice', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var Cacheservice;
  beforeEach(inject(function (_Cacheservice_) {
    Cacheservice = _Cacheservice_;
  }));

  it('should do something', function () {
    expect(!!Cacheservice).toBe(true);
  });

});
