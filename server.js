const val = require("./Server/validator.js");

let express = require("express");
let bodyParse = require("body-parser");
let fs = require("fs");
const urlencodedParser = bodyParse.json();

const model = new Model();
let validator = new val.Validator(model.usersRegistrate.getUsers());
const app = express();

app.get("/checkOnValid", function (req, res) {
    res.send("Получил, держи ответ");
});

app.post("/getVector", urlencodedParser, function (req, res) {
    console.log(`getVector`);
    const users = model.usersRegistrate.getUsers();
    console.log(users);


    res.send(users);
});

app.post("/logIn", urlencodedParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);

    let data = JSON.stringify(req.body);
    data = JSON.parse(data);

    console.log(`что пришло`);
    console.log(data.email, data.password);

    const newUser = {
        email: data.email,
        password: data.password
    };

    console.log(`Валидация`);
    if (!validator.isValid(data.email, data.password)) {
        console.log('is valid');
    } else {
        console.log('NO valid');
    }
    console.log(`Проверка регистрации`);
    if (validator.isRegistrate(newUser)) {
        console.log(`ПРОШЕЛ ПРОВЕРКУ`);
        model.usersRegistrate.addUser(newUser);
        res.send("good_reg");
    } else {
        console.log(`НЕЕЕЕЕЕЕЕ ПРОШЕЛ ПРОВЕРКУ`);

        res.send("bad_reg");
    }

});

app.post("/signIn", urlencodedParser, function (req, res) {

    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);

    let data = JSON.stringify(req.body);
    data = JSON.parse(data);

    console.log("/signIn");
    console.log(data.name, data.email, data.configPassword, data.password);

    const newUser = new User(data.name, data.email, data.password);
    model.usersRegistrate.addUser(newUser);
    model.usersRegistrate.show();
    res.send("good_reg");
});

app.use(express.static("./public"));

app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
});

function Model() {
    this.usersRegistrate = new Users();       // user.js
    this.chatMsg = new Chat();                      // chat.js
};

function Chat() {
    const chat = [];  // message.js

    this.getChat = () => {
        return chat;
    };

    this.addMessage = message => {
        return chat.push(message);
    };
};

function Message(Owner, Date, Text) {
    const owner = Owner;        // user.js
    const date = Date;
    const text = Text;

    this.getMessage = () => {
        return {
            owner: owner,
            date: date,
            text: text
        };
    };
};

function Users() {
    const users = [];       // user.js

    this.getUsers = () => {
        return users;
    };

    this.addUser = user => {
        return users.push(user);
    };

    this.show = () => {
        for (let i = 0; i < users.length; i++) {
            let user = users[i].getUser();
            console.log(user.name, user.email, user.password);
        }
    }
};

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
};



