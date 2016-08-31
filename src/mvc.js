/**
 * Created by lss on 2016/8/2.
 */
var hellomodule=angular.module('helloangular',[]);

hellomodule.controller('hellongctrl',['$scope',function ($scope) {
    $scope.greeting={
        text:'panel-primary'
    };
    $scope.mes=function () {
        $scope.greeting.text="panel-success";
    }
}]);

hellomodule.directive("hello",function () {
    return{
        restrict:'AE',
        //replace:true,
        transclude:true,
        template:'<div>你大爷<div ng-transclude=""></div></div>'
    }
});

