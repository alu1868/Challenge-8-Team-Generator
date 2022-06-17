const Employee = require("../lib/Employee");

function createTeam(teamData) {
    console.log(teamData)
    function createManager(manager) {
        return `
            <div>
                <div class="m-3 border border-dark card rounded">
                    <div class="bg-warning">
                        <h2 class="text-white">MANAGER</h2>
                    </div>

                    <div>
                        <h3 class="font-weight-bold">Name: ${manager.name}</h3> 
                        <p class="font-weight-bold">ID Number: ${manager.id}</p> 
                        <a class="font-weight-bold" href="mailto:${manager.email}">Email: ${manager.email}</a> 
                        <p class="font-weight-bold">Office Number: ${manager.officeNumber}</p> 
                    </div>

                </div>
            </div>
        `
    }
    function createEngineer(engineer) {
        return `
            <div>
                <div class="m-3 border border-dark card rounded">
                    <div class="bg-danger">
                        <h2 class="text-white">ENGINEER</h2>
                    </div>

                    <div>
                        <h3 class="font-weight-bold">Name: ${engineer.name}</h3> 
                        <p class="font-weight-bold">ID Number: ${engineer.id}</p> 
                        <a class="font-weight-bold" href="mailto:${engineer.email}">Email: ${engineer.email}</a> 
                        <p class="font-weight-bold">Github Username: ${engineer.github}</p> 
                    </div>

                </div>
            </div>
        `
    }
    function createIntern(intern) {
        return `
            <div>
                <div class="m-3 border border-dark card rounded">
                    <div class="bg-success">
                        <h2 class="text-white">INTERN</h2>
                    </div>

                    <div>
                        <h3 class="font-weight-bold">Name: ${intern.name}</h3> 
                        <p class="font-weight-bold">ID Number: ${intern.id}</p> 
                        <a class="font-weight-bold" href="mailto:${intern.email}">Email: ${intern.email}</a> 
                        <p class="font-weight-bold">School: ${intern.school}</p> 
                    </div>

                </div>
            </div>
        `
    }

    const teamArray =[];

    teamArray.push(teamData.filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager)).join(""));

    teamArray.push(teamData.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer)).join(""));
        
    teamArray.push(teamData.filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern)).join(""));

    return teamArray.join("")

}


module.exports = teamData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Page</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
    </head>

    <body>
        <header class="bg-primary" style="height: 50px;">
        <h1 class="text-center font-weight-bold text-white">Welcome to the Team!</h1>
        </header>

        <div>
            ${createTeam(teamData)}
        </div>
    </body>
    </html>
    `
}