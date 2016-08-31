/**
 * Created by lss on 2016/8/3.
 */
var atest = angular.module('atest', []);


atest.controller('myctrl', ['$scope', function ($scope) {
    $scope.loadData = function () {
        console.log("加载数据。。。。");
    }
}]);

atest.controller('myctrl2', ['$scope', function ($scope) {
    $scope.loadData2 = function () {
        console.log("加载数据。。。。2222");
    }
}]);

atest.directive('loader', function () {
    return {
        restrict: 'AEMC',
        scope:{},
        link: function (scope, element, attr) {
            element.bind('mouseenter', function () {
                // scope.$apply("loadData()");
                //  scope.loadData();
                scope.$apply(attr.howloader)
            });
        }
    }
});

atest.controller('uctrl',['$scope','$http',function ($scope,$http) {
    $http({
        method:'GET',
        url:'data.json'
    }).success(function (data, status, headers, config) {
        $scope.users=data;
    }).error(function () {
        console.log("数据获取失败");
    });

}]);

atest.filter('myfilter',function () {
    return function (item) {
        return item+"$";
    }
});
atest.config(function ($routeProvider) {
    $routeProvider.when('/index',{
        templateUrl:'test/index.html',
        controller:'hellongctrl'
    }).when('/test',{
        templateUrl:'test/test.html',
        controller:'uctrl'
    }).otherwise({
        redirectTo:'index'
    })

});

atest.controller('hellongctrl',['$scope',function ($scope) {
    $scope.greeting={
        text:'test法师打发'
    };

}]);