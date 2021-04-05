const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
    super(name, ID, email);
    this.officeNumber = officeNumber;
}

getofficeNumber() {
    return this.officeNumber;
}

getPosition() {
    return "Manager";
}
}

module.exports = Manager;
