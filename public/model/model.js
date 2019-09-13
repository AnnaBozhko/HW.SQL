function Model() {
    this.usersRegistrate = new Users();

    this.getUsersRegistrate = () => {
      return this.usersRegistrate.getUsers();
    };// user.js
    this.chatMsg = new Chat();                      // chat.js
}