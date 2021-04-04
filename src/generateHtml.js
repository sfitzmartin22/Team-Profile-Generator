const fs = require('fs');
const path = require('path');

const generate = employees => {
    const html = [];
    html.push(employees
        .filter(employee => employee.getPosition() === "Manager")
        .map(manager => generate(manager))
    
    );
    html.push(employees
        .filter(employee => employee.getPosition() === "Engineer")
        .map(engineer => generate(engineer))    
    );
    html.push(employees
        .filter(employee => employee.getPosition() === "Intern")
        .map(intern => generate(intern))
    );    

}

const generateManager = manager => {
    let merge = fs.readFileSync(__dirname, "./manager.html","utf8");

}