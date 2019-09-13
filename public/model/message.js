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

// module.exports.Message = Message;