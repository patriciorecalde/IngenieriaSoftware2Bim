/**
 * Created by christian on 3/3/15.
 */

krugerSchool.directive('message', function(){
    var directive = {
        restrict: 'E',
        templateUrl: 'modules/kruger/krugerschool/common/view/message.html',
        scope: true,
        controller: messageController,
        link : messageLink
    };
    return directive;
///////// Implementacion
    
    messageController.$inject = ['$scope'];
    
    function messageLink(){
        
        "use strict";
        
    }
    
    function messageController($scope) {
        var alert = null;
        $scope.setVisibility = function (value) {
            $scope.visibility = value;
        };

        $scope.$on('message:error', function (event, data) {
            alert = generateAlert(data, 'alert-danger');
            if (!alert.icon) {
                alert.icon = 'glyphicon glyphicon-remove-sign';
            }
            $scope.alert = alert;
        });

        $scope.$on('message:info', function (event, data) {
            alert = generateAlert(data, 'alert-info');
            if (!alert.icon) {
                alert.icon = 'glyphicon glyphicon-info-sign';
            }
            $scope.alert = alert;
        });

        $scope.$on('message:success', function (event, data) {
            alert = generateAlert(data, 'alert-success');
            if (!alert.icon) {
                alert.icon = 'glyphicon glyphicon-ok-sign';
            }
            $scope.alert = alert;
        });

        $scope.$on('message:warning', function (event, data) {
            alert = generateAlert(data, 'alert-warning');
            if (!alert.icon) {
                alert.icon = 'glyphicon glyphicon-exclamation-sign';
            }
            $scope.alert = alert;
        });

        function generateAlert (data, alertType) {
            $scope.visibility = true;
            return {
                title: data.title,
                message: data.message,
                list: data.list,
                alertType: alertType,
                icon: data.icon
            };
        }

    }
    
});

