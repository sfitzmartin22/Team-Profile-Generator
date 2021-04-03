const Employee = require("./Employee.js");

function Engineer(name, ID, email, gitHub) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.gitHub = gitHub;
}

module.exports = Engineer