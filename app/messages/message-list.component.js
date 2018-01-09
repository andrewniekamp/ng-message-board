(function() {
    'use strict';

    angular.module('app.messageList')
    .component('messageList', {
        templateUrl: '/app/messages/message-list.component.html',
        controllerAs: 'vm'
    });
}());