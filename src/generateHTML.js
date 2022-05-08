function generateTeamHTML(team) {

    function generateManagerCard(data) {
        return`
        <div class="card d-flex m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Manager</h5>
                <p class="card-text">Name: ${data.name}</p>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Office Number: ${data.officeNumber}</p>
                <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
        </div>
        `;
    }

    function generateInternCard(data) {
        return `
        <div class="card d-flex m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Intern</h5>
                <p class="card-text">Name: ${data.name}</p>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">School: ${data.school}</p>
                <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
        </div>
        `;
    }

    function generateEngineerCard(data) {
        return`
        <div class="card d-flex m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <p class="card-text">Name: ${data.name}</p>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Github: <a href="www.github.com/${data.github}">www.github.com/${data.github}</a></p>
                <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
            </div>
        </div>
        `;
    }

    const HTMLArray = [];
    HTMLArray.push(team
             .filter(employee => employee.getRole() === 'Manager')
             .map(manager => generateManagerCard(manager))
             );
    HTMLArray.push(team
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => generateEngineerCard(engineer))
            .join('')
            );
    HTMLArray.push(team
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => generateInternCard(intern))
            .join('')
            );
    return HTMLArray.join('');
}

module.exports = finalTeam => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
            <header>
                <nav class="navbar bg-light mb-5" id="navbar">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
                </nav>
            </header>
            <main>
                <div class="container d-flex flex-wrap">
                    <div class="d-flex flex-wrap justify-content-center" id="team-cards">
                        ${generateTeamHTML(finalTeam)}
                    </div>
                </div>
            </main>
            
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  
    </html>
    `
};