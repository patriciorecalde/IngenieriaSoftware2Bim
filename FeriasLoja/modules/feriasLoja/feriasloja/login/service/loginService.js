/**
 * Created by christian on 1/3/15.
 */
krugerSchool.factory('loginService',['$q','$http',function($q,$http){
    var database;
    "use strict";
     return {
         connect:connect
         
     };
    function connect(userName,password){
        var deferred = $q.defer();
        var request = {
            method: 'GET',
            url: 'http://10.10.30.63:2480/database/krugerschool',
            headers: {
                'Content-Type': 'application/json'
                //'Authorization':'Basic cm9vdDphZG1pbg=='
            },
            data: {
            }
        };
        if(userName === 'root' && password === 'admin'){
            request.headers['Authorization'] = 'Basic cm9vdDphZG1pbg==';
        }

        
        $http(request).success(function(response){
            deferred.resolve(response);
            
        }).error(function(){
            deferred.reject({error:'No se puede conectar a la base de datos'});
        });
        
        return deferred.promise;
    }
    
}]);