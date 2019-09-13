function Validator(model) {

    const _model = model;

    this.isValid = (email, pass) => {
        if (check(email) || check(email))
            return true;
        return false;
    };

    const check = (value) => {
        if (value === "" || value === undefined || value === null)
            return true;
        return false;
    }

    this.isRegistrate = (checkData) => {
        console.log(`isRegistrate`);
        console.log(checkData.email);
        console.log(checkData.password);
        for (let i = 0; i < _model.length; i++) {
            const temp = _model[i].getUser();
            if ( temp.email === checkData.email && temp.password === checkData.password) {
                return true;
            }
        }
        return false;
    }
}

module.exports = {Validator};
