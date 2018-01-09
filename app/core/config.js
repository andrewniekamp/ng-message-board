(function() {
    'use strict';

    angular.module('app.core')
    .config(function($stateProvider) {
        var dashboardState = {
            name: 'dashboard',
            url: '/dashboard',
            component: 'dashboard'
        };

        $stateProvider.state(dashboardState);
    });
}());