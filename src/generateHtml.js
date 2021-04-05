const fs = require('fs');
const path = require('path');
const Intern = require('./Intern');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css"> 
</head>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron p-01 mb-3">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
</div>
<body>
`;

managerContent = (managerResponses) => { return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h1 class="card-title">${managerResponses.name}</h1>
    <h2 class="card-subtitle mb-2 text-muted">Manager</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${managerResponses.ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerResponses.email}">${managerResponses.email}</a></li>
            <li class="list-group-item">Office Number: ${managerResponses.officeNumber}</li>
        </ul>
</div>        
</div>`
}

engineerContent = (engineerResponses) => { return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h1 class="card-title"> ${engineerResponses.name}</h1>
    <h2 class="card-subtitle mb-2 text-muted">Engineer</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerResponses.ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineerResponses.email}">${engineerResponses.email}</a></li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineerResponses.gitHub}">${engineerResponses.gitHub}</a></li>
        </ul>
</div>
</div>`
}

internContent = (internResponses) => { return `<div class="card" style="width: 18rem;">
<div class="card-header">
    <h1 class="card-title">${internResponses.name}</h1>
    <h2 class="card-subtitle mb-2 text-muted">Intern</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internResponses.ID}</li>
            <li class="list-group-item">Email: <a href="mailto:${internResponses.email}">${internResponses.email}</a></li>
            <li class="list-group-item">School: ${internResponses.school}</li>
        </ul>
</div>
</div>`
}

endContent = `</body>
</html>`;

module.exports = {
    htmlContent,
    managerContent,
    engineerContent,
    internContent,
    endContent
};