/**
 * Created by christian on 2/3/15.
 */
angular.module('krugerSchoolMod').controller('lazyGreetingController',['$ocLazyLoad','$compile','$scope',function(lazyLoader,$compile,$scope){
    
    "use strict";


    lazyLoader.load("modules/kruger/krugerschool/lazyLoad/directive/sayHelloDirective.js").then(function() {
        var el, elToAppend;
        elToAppend = $compile('<say-hello to="Curso de Angular"></say-hello>')($scope);
        el = angular.element('#example');
        el.append(elToAppend);
    }, function(e) {
        console.log(e);
    })
}]);