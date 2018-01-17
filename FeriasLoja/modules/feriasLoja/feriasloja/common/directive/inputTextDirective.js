/**
 * Created by christian on 4/3/15.
 */
krugerSchool.directive('inputText',function($timeout){
    
    "use strict";

    var directive = {
        restrict: 'E',
        templateUrl: 'modules/kruger/krugerschool/common/view/inputText.html',
        scope: {
            value : '=',
            form : '='
        },
        controller: inputTextController,
        link:inputTextLink
    };
    
    function inputTextController($scope,$attrs){
        var name = $attrs.name,required = $attrs.required;
        
        $scope.name = $attrs.name;
        
        $scope.required = required && required === 'true'?true:false;
        
        $scope.label = $attrs.label + ":";
        
        $scope.lblInputId = 'lblInput' + name;
        
        $scope.txtInputId = 'txtInput'+ name;
        
        
    }
    function inputTextLink($scope, formElement, attributes, formController) {
       /* formElement.bind('#button1id', function (event) {
            formController.setAttempted();
            if (!$scope.$$phase) $scope.$apply();
        });*/
    }
    return directive;
});