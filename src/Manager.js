const Employee = require("./Employee.js");

function Manager(name, ID, email, officeNumber) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.officeNumber = officeNumber;
}

module.exports = Manager