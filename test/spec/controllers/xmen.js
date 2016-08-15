'use strict';

describe('Controller: XmenCtrl', function () {

  // load the controller's module
  beforeEach(module('projectxApp'));

  var XmenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XmenCtrl = $controller('XmenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(XmenCtrl.awesomeThings.length).toBe(3);
  });
});
