(function() {
    'use strict';

    angular.module('app.messageDetail')
    .component('messageDetail', {
        bindings: {
            message: '<'
        },
        templateUrl: '/app/messages/message-detail.component.html',
        controllerAs: 'vm',
        controller: function(messageFactory) {
            this.logOption = 'Meta';
            this.options = ['Meta', 'Detail'];
            this.messages = messageFactory.getAllMessages();
        }
    });
}());