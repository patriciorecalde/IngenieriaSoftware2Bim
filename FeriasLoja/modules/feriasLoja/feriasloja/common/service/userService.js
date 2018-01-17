/**
 * Created by christian on 6/3/15.
 */
krugerSchool.factory('userService', ['$http','$q' , function ($http, $q) {
    var userService = {
        findUsers : findUsers
        
    };
    function findUsers(){
        var deferred = $q.defer();
        "use strict";


        var request = {
            method: 'GET',
            url: 'http://10.10.30.63:2480/command/krugerschool/sql/select from Student',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Basic cm9vdDphZG1pbg=='
            },
            data: {
            }
        };

        $http(request).
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject({error:'Error al consultar los datos de los estudiantes'});
            });
        return deferred.promise;
    }
    return userService;
}]);