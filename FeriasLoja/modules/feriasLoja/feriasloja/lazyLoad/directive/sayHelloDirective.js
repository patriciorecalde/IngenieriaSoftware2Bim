/**
 * Created by christian on 2/3/15.
 */
angular.module("krugerSchoolMod", []).directive("sayHello", function() {
    return {
        scope: {
            to: '@to'
        },
        restrict: "E",
        template: '<p>Bienvenidos al {{to}}</p>'
    };
});