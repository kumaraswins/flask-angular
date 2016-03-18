angular.module('SampleAPP')
    .controller('RegisterController', ['$scope','$rootScope', '$http', '$location', 'DataService', RegisterController]);

function RegisterController($scope,$rootScope, $http, $location, DataService) {
    $scope.user = {};
    $scope.register = function () {
        console.log($scope.user)
        console.log(typeof($scope.user))
        $http({
            method: 'POST',
            url: '/register',
            data: $scope.user
        }).then(function successCallback(response) {
            console.log(typeof (response));
            $rootScope.app.showNavBar = true;

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
}