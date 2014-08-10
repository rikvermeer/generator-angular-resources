'use strict';

function sanitizeRestangularOne(item) {
	return _.omit(item, "route", "parentResource", "getList", "get", "post", "put", "remove", "head", "trace", "options", "patch",
		"$get", "$save", "$query", "$remove", "$delete", "$put", "$post", "$head", "$trace", "$options", "$patch",
		"$then", "$resolved", "restangularCollection", "customOperation", "customGET", "customPOST",
		"customPUT", "customDELETE", "customGETLIST", "$getList", "$resolved", "restangularCollection", "one", "all", "doGET", "doPOST",
		"doPUT", "doDELETE", "doGETLIST", "addRestangularMethod", "getRestangularUrl", "singleOne", "getRequestedUrl", "clone", "reqParams", 
		"withHttpConfig", "plain", "several", "oneUrl", "allUrl", "fromServer", "save", "_$httpConfig");
}
	
function sanitizeRestangularList(items) {
    for(var i = 0; i < items.length; i++) {
        items[i] = sanitizeRestangularOne(items[i]);
    }
    return items;
}



describe('Resource controllers: <%= name %>', function () {

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
            scope = $rootScope.$new();
            ctrl = $controller('<%= classedName %>CreateCtrl', {$scope: scope});
        }));

        it('should create "<%= name %>" by xhr POST', function() {
            $httpBackend.expectPOST('/<%= name %>')
                    .respond({id: 1});
				
            var emptyResource = sanitizeRestangularOne(scope.resource);
            expect(emptyResource).toEqualData({});

            scope.saveResource();
            $httpBackend.flush();

            expect(sanitizeRestangularOne(scope.resource)).toEqualData({id: 1});
        });
    });

    describe('Controller: <%= classedName %>EditCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $routeParams) {
            $httpBackend = _$httpBackend_;
            $routeParams.id = 1;
            scope = $rootScope.$new();
            ctrl = $controller('<%= classedName %>EditCtrl', {$scope: scope});
        }));

        it('should GET "<%= name %>" and PUT modified "<%= name %>" over xhr', function() {
            expect(sanitizeRestangularOne(scope.resource))
                .toEqualData({id: 1});
				
            $httpBackend.expectGET('/<%= name %>/1').respond({id: 1, param1: 'value1'});
            $httpBackend.flush();
			
            expect(sanitizeRestangularOne(scope.resource))
                .toEqualData({id: 1, param1: 'value1'});
			
            $httpBackend.expectPUT('/<%= name %>/1').respond({id: 1, param1: 'value1', param2: 'value2'});
			
            scope.resource.param2 = 'value2';
            scope.saveResource();
			
            $httpBackend.flush();

            expect(sanitizeRestangularOne(scope.resource))
                .toEqualData({id: 1, param1: 'value1', param2: 'value2'});
        });
    });

    describe('Controller: <%= classedName %>ListCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/<%= name %>').
                respond([{id: 1, param: 'value'}, {id: 2, param: 'value'}]);
            scope = $rootScope.$new();
            ctrl = $controller('<%= classedName %>ListCtrl', {$scope: scope});
        }));

        it('should get a list of "<%= name %>" by xhr GET', function() {
            expect(scope.resource).toEqualData([]);

            $httpBackend.flush();

            expect(sanitizeRestangularList(scope.resource)).toEqualData(
                [{id: 1, param: 'value'}, {id: 2, param: 'value'}]);
        });
    });
});