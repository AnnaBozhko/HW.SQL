function Controller() {
    const view = new View();
    let style = null;

    this.init = () => {
        switch(view.page){
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
    };

    const clickSignIn = () => {
        view.page = 4;
        drawPageSignIn();
        view.signIn.onclick = null;
        style = Object.create(view.signIn.style);
        view.signIn.style.background = '#6AABFA';
        view.logIn.style = Object.create(style);
        this.init();
    };

    const clickSubmitLogIn = () => {
        view.page = 2;
        drawAccountPage();
        this.init();
    };

    const clickSubmitSignIn = () => {
        view.page = 1;
        drawPageLogIn();
        view.logIn.onclick = null;
        style = Object.create(view.logIn.style);
        view.logIn.style.background = '#6AABFA';
        view.signIn.style = Object.create(style);
        this.init();
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
        drawTable();
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