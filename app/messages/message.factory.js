(function () {

    angular.module('app.messageFactory', [])
    .factory('messageFactory', messageFactory);

    function messageFactory() {
        var messages = [
            {
                messageId: 1,
                content: 'This is the content of a message.'
            },
            {
                messageId: 2,
                content: 'This is contrent from another one.'
            },
            {
                messageId: 3,
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