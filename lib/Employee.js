class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;

}
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getID = function() {
    return this.ID;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getPosition = function() {
    return this.position;
}



module.exports = Employee;
