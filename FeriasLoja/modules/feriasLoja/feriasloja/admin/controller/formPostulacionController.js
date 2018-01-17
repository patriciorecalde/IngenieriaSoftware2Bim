/**
 * Created by christian on 6/3/15.
 */
krugerSchool.config(['$routeProvider',function($routeProvider){
    "use strict";
    $routeProvider.
        when('/users', {
            templateUrl: 'modules/kruger/krugerschool/admin/view/userView.html',
            controller: 'userController'
        });
}]).controller('userController',['userService','$scope',function(userService,$scope){
    var userCtrl = this;
    "use strict";
    var loginCtrl = this;
    userService.findUsers().then(function(data){
        
        userCtrl.userTable = data.result;
    }).catch(function(data){
        $scope.$root.$broadcast('message:error',{title:'Error',message:data.error});
        
    });

}]);