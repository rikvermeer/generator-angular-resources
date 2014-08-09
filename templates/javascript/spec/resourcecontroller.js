'use strict';

describe('Resource controllers: <%= classedName %>', function () {

    beforeEach(function(){
        this.addMatchers({
          toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
          }
        });
    });
	
    beforeEach(module('<%= scriptAppName %>'));
	
    describe('Controller: <%= classedName %>CreateCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectPOST('<%= classedName %>').
                respond({id: 1});
            scope = $rootScope.$new();
            ctrl = $controller('<%= classedName %>CreateCtrl', {$scope: scope});
        }));

        it('should create "<%= classedName %>" by xhr POST', function() {
            expect(scope.resource).toEqualData({});

            scope.saveResource();
            $httpBackend.flush();

            expect(scope.resource).toEqualData({id: 1});
        });
    });

    describe('Controller: <%= classedName %>EditCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectPUT('<%= classedName %>/1').
                    respond({id: 1, param: 'value'});
            scope = $rootScope.$new();
            ctrl = $controller('<%= classedName %>EditCtrl', {$scope: scope});
        }));

        it('should create "<%= classedName %>" by xhr PUT', function() {
            expect(scope.resource).toEqualData({id: 1});

            scope.saveResource();
            $httpBackend.flush();

            expect(scope.resource).toEqualData({id: 1, param: 'value'});
        });
    });

    describe('Controller: <%= classedName %>ListCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('<%= classedName %>').
                    respond([{id: 1, param: 'value'}, {id: 2, param: 'value'}]);
            scope = $rootScope.$new();
            ctrl = $controller('<%= classedName %>ListCtrl', {$scope: scope});
        }));

        it('should get a list of "<%= classedName %>" by xhr GET', function() {
            expect(scope.resource).toEqualData([]);

            $httpBackend.flush();

            expect(scope.resource).toEqualData([{id: 1, param: 'value'}, {id: 2, param: 'value'}]);
        });


    });
});