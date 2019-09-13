function User(Name, Email, Password, OnLine) {
    const name = Name;
    const email = Email;
    const password = Password;
    const onLine = OnLine;

    this.getUser = () => {
        return {
            name: name,
            email: email,
            password: password,
            onLine: onLine

    };
    };
};

// module.exports.User = User;