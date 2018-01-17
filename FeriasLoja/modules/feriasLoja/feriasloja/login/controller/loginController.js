/**
 * Created by christian on 1/3/15.
 */
krugerSchool.config(['$routeProvider',function($routeProvider){
    "use strict";
    $routeProvider.
        when('/login', {
            templateUrl: 'modules/kruger/krugerschool/login/views/loginView.html',
            controller: 'loginController'
        }).
        otherwise( {
            redirectTo: '/login'
        });
}]).controller('loginController',['i18nService','loginService','$scope','$q','$location',function(i18nService,loginService,$scope,$q,$location){
    
    "use strict";
    var loginCtrl = this;
    //loginCtrl.date = new Date();
    loginCtrl.createAccountWindow ={
        title : i18nService.getMessage('login.createAccount'),
        visible : false,
        modal : true
       // width : '500px'

    };
    //fields
    loginCtrl.name = null;
    loginCtrl.email = null;
    loginCtrl.password = null;
    loginCtrl.confirmedPassword = null;
    //methods
    loginCtrl.createAccount = createAccount;
    loginCtrl.accept = accept;
    loginCtrl.cancel = cancel;
    loginCtrl.getFormControl = getFormControl;
    loginCtrl.signIn = signIn;
    
    function signIn(){
        var promise = loginService.connect(loginCtrl.name,loginCtrl.password);
        promise.then(function(data){
            $location.path('/users');
        });
        promise.catch(function(data){
            $scope.$root.$broadcast('message:error',{title: 'Error', message:data.error});

        });
    } 

    function validate(){
        var errors = [];
        if(_.isEmpty(loginCtrl.name)){
            errors.push('El campo nombre es requerido');
        }
        if(_.isEmpty(loginCtrl.email)){
            errors.push('El campo email es requerido');
        }
        if(_.isEmpty(loginCtrl.password)){
            errors.push('El campo password es requerido');
        }
        if(_.isEmpty(loginCtrl.confirmedPassword)){
            errors.push('El campo confirmar password es requerido');
        }
        return errors;
    }
    

    function getFormControl(name){
        return $scope.form[name];
        
    }

    //
    function createAccount(){
        var createAccountWindow = $scope.createAccountWindow;
        
        
    //    loginCtrl.createAccountWindow = createAccountWindow;
        createAccountWindow.center();
        createAccountWindow.open();
    }
    
    function accept(){
        var errors = validate();
        if(!errors.length){
            var createAccountWindow = $scope.createAccountWindow;
            createAccountWindow.close();
        }
        else{
            $scope.$root.$broadcast('message:error',{title: 'Error de validación', list:errors});
            
        }
        //message:error

       
    }
    
    function cancel(){
        var createAccountWindow = $scope.createAccountWindow;
        createAccountWindow.close();
        
    }
    
}]);