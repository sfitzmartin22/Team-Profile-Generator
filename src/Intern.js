const Employee = require("./Employee.js");

function Intern(name, ID, email, school) {
    this.name = name;
    this.ID = ID;
    this.email = email;
    this.school = school;
}

module.exports = Intern