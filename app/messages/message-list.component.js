(function() {
    'use strict';

    angular.module('app.messageList')
    .component('messageList', {
        bindings: {
            messages: '<'
        },
        templateUrl: '/app/messages/message-list.component.html',
        controllerAs: 'vm'
    });
}());