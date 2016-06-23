var app = angular.module('App', []);
app.controller('Controller', function($scope, $http) {
    $scope.user = 'Enter name';
    $scope.getUser = function(err, res) {
        $http.get('https://api.github.com/users/' + $scope.user).then(function(res) {
            $scope.res = res;
            console.log($scope.res);
        });
    };
});
