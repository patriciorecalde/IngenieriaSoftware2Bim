/**
 * Created by christian on 2/3/15.
 */
krugerSchool.factory('i18nService', ['$interpolate','i18nConstant','$locale' , function ($interpolate,messages,$locale) {

    "use strict";
    //////Declaracion del servicio
    return {
        
        getMessage: getMessage
    };
    
    //////Implementacion de la logica del servicio
    function getMessage (label, params) {
        if(params){
            return $interpolate(messages[$locale.id][label])(params);
        }

        return messages[$locale.id][label];
    }
}]);