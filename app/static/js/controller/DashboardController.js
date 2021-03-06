angular.module('SampleAPP')
    .controller('DashboardController', ['$scope', '$http', '$location', 'DataService', DashboardController]);

function DashboardController($scope, $http, $location, DataService) {
    $scope.user = {};
    var url = '/static/data/user.json'

    //Simple AJAX GET 
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        console.log(typeof (response));
        $scope.user = response.data;

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    
    $http({
        method: 'GET',
        url: '/projects'
    }).then(function successCallback(response) {
        console.log(response.data);

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $scope.submit = function () {
        DataService.addProduct($scope.user);
        $location.path("/users")
    }
}