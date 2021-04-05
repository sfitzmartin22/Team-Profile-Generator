const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, ID, email, gitHub, position) {
    super(name, ID, email)
    this.gitHub = gitHub;
}

getgithub() {
    return this.gitHub;
}

getPosition() {
    return "Engineer";
}
}

module.exports = Engineer;