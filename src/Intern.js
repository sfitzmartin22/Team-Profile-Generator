const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
}

getschool() {
    return this.school;
}

getPosition() {
    return "Intern";
}
}

module.exports = Intern;