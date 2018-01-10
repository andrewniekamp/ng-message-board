(function() {
    'use strict';

    angular.module('app', [
        // Common modules
        'app.core',

        // Feature modules
        'app.dashboard', // Includes dashboard component
        'app.messageList',
        'app.messageDetail',
        'app.messageFactory'
        // 'app.layout'
    ]);
}());