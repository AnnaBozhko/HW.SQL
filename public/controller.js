// import {SendToServer} from "./sendToServer.js";
// import {View} from "./view.js";
// import {Validator} from "./validator.js";

function Controller() {


    const view = new View();
    const sendData = new SendToServer();
    const model = new Model();
    const validator = new Validator(model.usersRegistrate);
    let style = null;
    let table;


    this.init = () => {
        switch (view.page) {
            case 1:
                view.getIdPage1();
                view.logIn.style.background = '#6AABFA';
                view.signIn.onclick = clickSignIn;
                view.submitLogIn.onclick = clickSubmitLogIn;
                break;
            case 2:
                view.getIdPage2();
                view.logOut.onclick = clickLogOut;
                view.chat.onclick = clickChat;
                view.users.style.background = '#6AABFA';
                break;
            case 3:
                view.getIdPage3();
                view.logOut.onclick = clickLogOut;
                view.users.onclick = clickUsers;
                view.send.onclick = clickSend;
                break;
            case 4:
                view.getIdPage4();
                view.logIn.onclick = clickLogIn;
                view.submitSignIn.onclick = clickSubmitSignIn;
                break;
        }
    };

    const clickLogIn = () => {
        view.page = 1;
        drawPageLogIn();
        view.logIn.onclick = null;
        style = Object.create(view.logIn.style);
        view.logIn.style.background = '#6AABFA';
        view.signIn.style = Object.create(style);
        this.init();
        logSign = false;
    };

    const clickSignIn = () => {
        view.page = 4;
        drawPageSignIn();
        view.signIn.onclick = null;
        style = Object.create(view.signIn.style);
        view.signIn.style.background = '#6AABFA';
        view.logIn.style = Object.create(style);
        this.init();
        logSign = true;
    };

    const clickSubmitLogIn = () => {
        const password = view.passwordEnter.value;
        const email = view.emailEnter.value;
        let url = "/logIn";
        const data = {
            email: email,
            password: password,
        };
        if (!validator.isValid(email, password)) {
            sendData.postRequest(url, data, (rez) => {
                console.log(`rez`);
                console.log(rez);
                if (rez === 'good_reg') {
                    view.page = 2;
                    drawAccountPage();
                    this.init();
                    //addToTable();
                    sendData.postRequest("/getVector", {x:10}, (data) =>{     // TODO через get запрос
                        console.log(data);
                       //const dataObj =JSON.parse(data);
                       //  for(let i =0; i< data.length; i++){
                       //      console.log(data[i]);
                       //  }
                    })
                } else {
                    alert("Братан, да ты не зареган");
                }
            });
        } else {
            alert("Братан введи поля");
        }
    };

    const addToTable = () => {
        let tr = createRow('zxczxc','zxczxc','zxczxc', 'asdasd');
        table[1].append(tr);
        table[0].append(table[1]);

    };

    const clickSubmitSignIn = () => {
        const password = view.passwordEnter.value;
        const email = view.emailEnter.value;
        const name = view.name.value;
        const configPassword = view.configPassword.value;
        let url = "/signIn";
        const data = {
            name: name,
            email: email,
            password: password,
            configPassword: configPassword
        };

        if (!validator.isValid(email, password) && !validator.isValidPassword(configPassword, password)) {
            sendData.postRequest(url, data, (rez) => {
                console.log(`rez`);
                console.log(rez);
                if (rez === `good_reg`) {
                    view.page = 1;
                    drawPageLogIn();
                    view.logIn.onclick = null;
                    style = Object.create(view.logIn.style);
                    view.logIn.style.background = '#6AABFA';
                    view.signIn.style = Object.create(style);
                    this.init();
                } else {
                    alert("Братан ты не зареган");
                }
            })
        } else {
            alert("Братан введи поля");
        }
    };

    const clickLogOut = () => {
        view.page = 1;
        logOut();
        this.init();
    };

    const clickChat = () => {
        view.page = 3;
        createChat();
        view.users.onclick = null;
        style = Object.create(view.chat.style);
        view.chat.style.background = '#6AABFA';
        view.users.style = Object.create(style);
        this.init();
    };

    const clickUsers = () => {
        view.page = 2;
        table = drawTable();
        view.chat.onclick = null;
        style = Object.create(view.users.style);
        view.users.style.background = '#6AABFA';
        view.chat.style = Object.create(style);
        this.init();
    };

    const clickSend = () => {
        console.log('Clicked send');
    };

}


new Controller().init();


