'use strict';
/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>CreateCtrl'
 * @description
 * # <%= classedName %>CreateCtrl
 * Create controller for the <%= classedName %> resource in <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>CreateCtrl', function ($scope, Restangular) {
        $scope.resource = Restangular.one('<%= name %>');
        $scope.saveResource = function() {
            $scope.resource.save() // POST /<%= name %>
                .then(
                    function(resource) {
                        $scope.resource = resource;
                        $scope.$emit('<%= name %>-create-success', $scope.resource );
                    },
                    function() {
                        $scope.$emit('<%= name %>-create-failed');
                    }
                );
            };
    });
    
/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>EditCtrl'
 * @description
 * # <%= classedName %>EditCtrl
 * Edit controller for the <%= classedName %> resource in <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>EditCtrl', function ($scope, Restangular, $routeParams) {
        $scope.resource = Restangular.one('<%= name %>', $routeParams.id);
        $scope.resource.get() // GET: /<%= classedName %>/$routeParams.id
            .then(
                function(resource) {
                    $scope.resource = resource;
                    $scope.$emit('<%= name %>-get-success', $scope.resource );
                }, function() {
                    $scope.$emit('<%= name %>-get-failed');
                }
            );
    
        $scope.saveResource = function() {
            $scope.resource.save() // PUT /<%= name %>/<%= name %>.id
                .then(
                    function() {
                        $scope.$emit('<%= name %>-edit-success', $scope.resource );
                    }, function() {
                        $scope.$broadcast('<%= name %>-edit-failed');
                    }
                );
        };
    });

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>ListCtrl'
 * @description
 * # <%= classedName %>ListCtrl
 * List controller for the <%= classedName %> resource in <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>ListCtrl', function ($scope, Restangular) {
        $scope.resource = Restangular.all('<%= name %>');
	$scope.resource.getList()  // GET: /<%= name %>
            .then(
                function(resource) {
                    $scope.resource = resource;
                    $scope.$emit('<%= name %>-list-success', $scope.resource);
                }, function() {
                    $scope.$emit('<%= name %>-list-failed');
                }
            );
    
        $scope.deleteResource = function(singleResource) {
            singleResource.remove() // DELETE /<%= classedName %>/<%= classedName %>.id
                .then(function() {
                    $scope.$emit('<%= name %>-delete-success', singleResource);
                    var index = $scope.resource.indexOf(singleResource);
                    if (index > -1) {
						$scope.resource.splice(index, 1);
					}
                }, function() {
                    $scope.$emit('<%= name %>-delete-failed');
                }
            );
        };
    });

