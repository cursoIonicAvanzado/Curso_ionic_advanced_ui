angular.module('starter.accordion', [])
    .controller('AccordionCtrl', function ($scope, $ionicPlatform) {
        $scope.groups = [];

        $ionicPlatform.ready(function () {
           $scope.groups.push({
               name: 'Frutas',
               items: [
                   'Pepino', 'Sandía', 'Jícama', 'Naranja'
               ]
           });

            $scope.groups.push({
                name: 'Verduras',
                items: [
                    'Brócoli', 'Lechuga', 'Zanahoria'
                ]
            });

            $scope.groups.push({
                name: 'Chatarra',
                items: [
                    'Sabritas', 'Chocolate', 'Galletas', 'Maruchan'
                ]
            });
        });

        $scope.toggleGroup = function (group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };

        $scope.isGroupShown = function (group) {
            return $scope.shownGroup === group;
        };
    });