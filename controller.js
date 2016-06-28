angular.module('App', []).controller('Controller',
function Controller($http) {
    var vm = this;
    vm.user = 'Gusbenz';
    vm.getUser = function() {
        $http.get('https://api.github.com/users/' + vm.user).then(function(data) {
            vm.results = data;
            console.log(vm.results);
        });
    };
});
