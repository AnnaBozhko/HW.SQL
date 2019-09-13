function Chat() {
    const chat = [];  // message.js

    this.getChat = () => {
        return chat;
    };

    this.addMessage = message => {
        return chat.push(message);
    };
};

// module.exports.Chat = Chat;