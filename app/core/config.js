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
            component: 'messageList',
            resolve: {
                // Transitions has params
                messages: function (messageFactory) {
                    return messageFactory.getAllMessages();
                }
            }
        };
        var messageDetailState = {
            name: 'messageDetail',
            url: '/messages/{messageId}',
            component: 'messageDetail',
            resolve: {
                // Transitions has params
                message: function (messageFactory, $transition$) {
                    return messageFactory.findMessageById($transition$.params().messageId);
                }
            }
        };

        $stateProvider.state(dashboardState);
        $stateProvider.state(messageListState);
        $stateProvider.state(messageDetailState);
    });
}());