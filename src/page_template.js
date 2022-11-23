  const generateInit = () => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./css/style.css">
        <link type="text/css" rel="stylesheet" href="./css/bootstrap.css"  media="screen,projection"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
        <title>Team Org Chart</title>
    </head>
    
    <body>
    
        <header>
            <h1 class="p-3 mb-2 bg-success text-white">My Team</h1>
        </header>

    <main>
    <section class="d-flex p-2 bd-highlight">

    `
  };
  
  const generateManager = (manager) => {
  
    return `
    <div class="card" style="width: 23rem;">
      <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Id : ${manager.getId()}</li>
          <li class="list-group-item">Email : <a href="mailto:${manager.getEmail()}? subject=subject text" target="_blank">${manager.getEmail()}</a></li>
          </li>
          <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
          </ul>
      </div>
    </div>
    `
  };
  
  const generateEngineer = (Engineer) => {

    return `
    <div class="card" style="width: 23rem;">
      <div class="card-body">
        <h5 class="card-title">${Engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Engineer.getRole()}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id : ${Engineer.getId()}</li>
          <li class="list-group-item">Email : <a href="mailto:${Engineer.getEmail()}? subject=subject text" target="_blank">${Engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="http://github.com/${Engineer.getGithub()}/" target="_blank">${Engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `
  };
  
  // to make intern code 
  
  const generateIntern = (Intern) => {

    return `
    <div class="card" style="width: 23rem;">
      <div class="card-body">
        <h5 class="card-title">${Intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Intern.getRole()}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id : ${Intern.getId()}</li>
          <li class="list-group-item">Email : <a href="mailto:${Intern.getEmail()}? subject=subject text" target="_blank">${Intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `
  };
  
  
  // to make closing HTML code
  
  const closingHTML = () => {
    return `
    
     </section>
     </main>
        <script type="text/javascript" src="./js/bootstrap.js"></script>

      </body>
    </html>
    `
  }
    
module.exports = {generateInit, generateManager, generateIntern, generateEngineer, closingHTML};