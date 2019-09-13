function Controller() {

    const view = new View();


    // this.init = () => {      // TODO НАДОЛИ ВООБЩЕ???
    //
    //     view.logIn.onclick = clickLogIn;
    //     view.signIn.onclick = clickSignIn;
    //     view.submitEnter.onclick = clickSubmit;
    //
    //     view.logInSignIn.onclick = clickLogInSignIn;
    //     view.signInSignIn.onclick = clickSignInSignIn;
    //     view.submitSignIn.onclick = clickSubmitSignIn;
    //
    //
    // };

    this.initPageOne = () => {

        view.logIn.onclick = clickLogIn;
        view.signIn.onclick = clickSignIn;
        view.submitEnter.onclick = clickSubmit;

    };


    this.initPageTwo = () => {

        view.logInSignIn.onclick = clickLogInSignIn;
        view.signInSignIn.onclick = clickSignInSignIn;
        view.submitSignIn.onclick = clickSubmitSignIn;

    };


    const clickLogInSignIn = function (event) {
        console.log(event);
        console.log("АГОНЬ");
        console.log("clickLogInSignIn");
    }

    const clickSignInSignIn = function (event) {
        console.log(event);
        console.log("АГОНЬ");
        console.log("clickSignInSignIn");
    }


    const clickSubmitSignIn = function (event) {
        console.log(event);
        console.log("АГОНЬ");
        console.log("clickSubmitSignIn");

    }


    const clickSubmit = function (event) {
        console.log(event);
        console.log("АГОНЬ");
        console.log("clickSubmit");

    }

    const clickLogIn = function (event) {
        console.log(event);
        console.log("АГОНЬ");
        console.log("clickLogIn");

    }

    const clickSignIn = function (event) {
        console.log(event);
        console.log("АГОНЬ");
        console.log("clickSignIn");

    }

}