angular.module('starter.pullrefresh', [])
    .controller('PullRefreshCtrl', function ($scope) {
        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.doRefresh = function () {
            setTimeout(function () {
                //simulate async response
                $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            }, 100);
        };
    });