class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.position = position;

}
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.ID = function() {
    return this.ID;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getPosition = function() {
    return this.position;
}



module.exports = Employee;
