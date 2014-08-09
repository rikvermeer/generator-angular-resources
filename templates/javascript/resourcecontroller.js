'use strict';
/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>CreateCtrl'
 * @description
 * # <%= classedName %>CreateCtrl
 * Create controller for the <%= classedName %> resource in <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>CreateCtrl', function ($rootScope, $scope, Restangular) {
        $scope.resource = Restangular.one('<%= classedName %>');
            $scope.saveResource = function() {
            $scope.resource.save() // POST /<%= classedName %>
                .then(
                    function() {
                        $rootScope.$broadcast('<%= classedName %>-create-success', $scope.resource );
                    },
                    function() {
                        $rootScope.$broadcast('<%= classedName %>-create-failed');
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
    .controller('<%= classedName %>EditCtrl', function ($rootScope, $scope, Restangular, $routeParams) {
        Restangular.one('<%= classedName %>', $routeParams.id).get() // GET: /<%= classedName %>/$routeParams.id
            .then(
                function( <%= classedName %> ) {
                    $scope.resource = <%= classedName %> ;
                    $rootScope.$broadcast('<%= classedName %>-get-success', <%= classedName %> );
                }, function() {
                    $rootScope.$broadcast('<%= classedName %>-get-failed');
                }
            );
    
        $scope.saveResource = function( <%= classedName %> ) {
            <%= classedName %> .save() // PUT /<%= classedName %>/<%= classedName %>.id
                .then(
                    function() {
                        $rootScope.$broadcast('<%= classedName %>-edit-success', <%= classedName %> );
                    }, function() {
                        $rootScope.$broadcast('<%= classedName %>-edit-failed');
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
    .controller('<%= classedName %>ListCtrl', function ($rootScope, $scope, Restangular) {
        Restangular.all('<%= classedName %>').getList()  // GET: /<%= classedName %>
            .then(
                function( <%= classedName %> ) {
                    $scope.resource = <%= classedName %> ;
                    $rootScope.$broadcast('<%= classedName %>-list-success', <%= classedName %> );
                }, function() {
                    $rootScope.$broadcast('<%= classedName %>-list-failed');
                }
            );
    
        $scope.deleteResource = function( <%= classedName %> ) {
            <%= classedName %> .remove() // DELETE /<%= classedName %>/<%= classedName %>.id
                .then(function() {
                    $rootScope.$broadcast('<%= classedName %>-delete-success', <%= classedName %> );
                }, function() {
                    $rootScope.$broadcast('<%= classedName %>-delete-failed');
                }
            );
        };
    });

