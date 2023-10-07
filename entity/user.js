module.exports = class user {
    constructor(name, email, status) {
        this.name = name;
    }

    static getName() {
        return this.name;
    }
}