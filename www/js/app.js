// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.accordion',
    'starter.actionsheet', 'starter.pullrefresh', 'starter.editableList'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.accordion', {
                url: '/accordion',
                views: {
                    'tab-accordion': {
                        templateUrl: 'templates/tab-accordion.html',
                        controller: 'AccordionCtrl'
                    }
                }
            })

            .state('tab.pull_refresh', {
                url: '/pull_refresh',
                views: {
                    'tab-pull-refresh': {
                        templateUrl: 'templates/tab-pull-refresh.html',
                        controller: 'PullRefreshCtrl'
                    }
                }
            })

            .state('tab.action_sheet', {
                url: '/action_sheet',
                views: {
                    'tab-action-sheet': {
                        templateUrl: 'templates/tab-action-sheet.html',
                        controller: 'ActionSheetCtrl'
                    }
                }
            })

            .state('tab.editable_list', {
                url: '/editable_list',
                views: {
                    'tab-editable-list': {
                        templateUrl: 'templates/tab-editable-list.html',
                        controller: 'EditableListCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/accordion');

    });
