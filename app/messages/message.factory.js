(function () {

    angular.module('app.messageFactory', [])
    .factory('messageFactory', messageFactory);

    function messageFactory() {
        var messages = [
            {
                messageId: 1,
                type: 'Meta',
                content: 'This is the content of a message.'
            },
            {
                messageId: 2,
                type: 'Detail',
                content: 'This is contrent from another one.'
            },
            {
                messageId: 3,
                type: 'Meta',
                content: 'This is the content from the second to last one.'
            },
            {
                messageId: 4,
                type: 'Detail',
                content: 'This is the content from the last one.'
            },
        ];
        function getAllMessages () {
            return messages;
        }
        function findMessageById(id) {
            var messageToShow = {};
            messages.forEach(function(message) {
                if (parseInt(id) === message.messageId) {
                    messageToShow = message;
                }
            });
            return messageToShow;
        }
        return {
            getAllMessages: getAllMessages,
            findMessageById: findMessageById
        };
    }

}());