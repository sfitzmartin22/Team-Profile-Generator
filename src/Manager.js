const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
    this.name = name;
    this.ID = ID;
    this.email = email;
}

getofficeNumber() {
    return this.officeNumber;
}

getPosition() {
    return "Manager";
}
}

module.exports = Manager;
