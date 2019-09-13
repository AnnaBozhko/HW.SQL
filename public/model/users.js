function Users() {
    const users = [];

    this.getUsers = () => {
        return users;
    };

    this.addUser = user => {
        return users.push(user);
    };
};

