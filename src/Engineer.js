const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, ID, email, gitHub) {
    this.name = name;
    this.ID = ID;
    this.email = email;
}

getgithub() {
    return this.gitHub;
}

getPosition() {
    return "Engineer";
}
}

module.exports = Engineer