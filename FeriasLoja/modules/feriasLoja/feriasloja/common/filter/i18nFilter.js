/**
 * Created by christian on 2/3/15.
 */
krugerSchool.filter('i18n',['i18nService',function(i18nService){
    
    "use strict";

    return filterMessage;
    
    function filterMessage(key,params){
        return i18nService.getMessage(key,params);
        
    }
}]);