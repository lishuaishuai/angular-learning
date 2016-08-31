/**
 * Created by lss on 2016/8/4.
 */
var atest = angular.module('atest', ['ngAnimate','ngRoute']);

atest.controller('myctrl', ['$scope', '$rootScope', '$location', '$http', '$timeout', '$interval', 'myservice', function ($scope, $rootScope, $location, $http, $timeout, $interval, myservice) {
    $scope.num = 3;
    $scope.price = 9;
    $rootScope.lastname = '这是根作用域';
    $scope.thisurl = $location.absUrl();
    $http.get('data.json').then(function (response) {
        $scope.arrays = response.data;

    });
    $timeout(function () {
        $scope.lastname = "两秒后执行";
    }, 2000);

    $interval(function () {
        $scope.num++;
    }, 60000);

    $scope.price = myservice.myfun(9);
    $scope.toggle = function () {
        $scope.num = $scope.num * 10;
    }

}]);

atest.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<div>这是自定义指令</div>'
    }
});

atest.filter("myfilter", function () {
    return function (item) {
        return item + "-RMB";
    }
});

atest.service('myservice', function () {
    this.myfun = function (x) {
        return x * 10;
    }
});

atest.controller('mselect', function ($scope) {
    $scope.sites = [
        {site: "Google", url: "http://www.google.com"},
        {site: "Runoob", url: "http://www.runoob.com"},
        {site: "Taobao", url: "http://www.taobao.com"}
    ];
});

atest.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'index.html'}).when('/cp', {templateUrl: 'test.html'}).otherwise({redirectTo: '/'});

}]);