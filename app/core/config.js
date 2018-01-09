(function() {
    'use strict';

    angular.module('app.core')
    .config(function($stateProvider) {
        var dashboardState = {
            name: 'dashboard',
            url: '/dashboard',
            component: 'dashboard'
        };
        var messageListState = {
            name: 'messages',
            url: '/messages',
            component: 'messageList'
        };
        // var messageDetailState = {
        //     name: 'messages.message',
        //     url: '{messageId}',
        //     component: 'messageDetail'
        // };

        $stateProvider.state(dashboardState);
        $stateProvider.state(messageListState);
        // $stateProvider.state(messageDetailState);
    });
}());