const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, email, school) {
    this.name = name;
    this.ID = ID;
    this.email = email;
}

getschool() {
    return this.school;
}

getPosition() {
    return "Intern";
}
}

module.exports = Intern;