function User(Name, Email, Password) {
    const name = Name;
    const email = Email;
    const password = Password;

    this.getUser = () => {
        return {
            name: name,
            email: email,
            password: password
        };
    };
}

function Users() {
    const users = [];

    this.getUsers = () => {
        return users;
    };

    this.addUser = user => {
        return users.push(user);
    };
    //      //TODO Надо ли оно
}


function Message(Owner, Date, Text) {
    const owner = Owner;
    const date = Date;
    const text = Text;

    this.getMessage = () => {
        return {
            owner: owner,
            date: date,
            text: text
        };
    };
}

function Chat() {
    const chat = [];

    this.getChat = () => {
        return chat;
    };

    this.addMessage = message => {
        return chat.push(message);
    };
}