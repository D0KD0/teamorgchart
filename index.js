/* Acceptance criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/

/* Simple acceptance criteria
Use inquirer to get user input
Input the name, ID, email, and office number for the team manager
Provide a menu with options to add an engineer or intern
If adding an engineer, input the name, id, email, and github username of the engineer
If adding an intern, input the name, id, email, and school of the intern
After adding each engineer or intern, the user should be returned to the menu
The menu should have the option to finish adding members
Whent the user is done entering team members, the application should generate an HTML document
The document should show a "nicely formatted" team roster
It should be possible to click on an email address in the HTML and have the computer's email program open.
When clicking a github name, the github profile page of the user should open.
Your program must define and use the following classes: Employee, Engineer, Intern, Manager
Each of these classes must have a suite of well defined tests in a tests folder.
All tests must pass.
See the Getting Started section for further technical requirements.
*/

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Questions
const questionForManager = [
    {
        type: 'input',
        message: 'What is a name of Team manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is an id of Team manager?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is an email address of Team manager?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is an office number of Team manager?',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'If you want to add a team member, which role do you want to add?',
        name: 'teamMember',
        choices: [
            'Engineer',
            'Intern',
            'None'
        ]
    }
]

const questionForEngineer = [
    {
        type: 'input',
        message: 'What is a name of Engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is an id of Engineer?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is an email address of Engineer?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is a github address of Engineer?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'If you want to add a team member, which role do you want to add?',
        name: 'teamMember',
        choices: [
            'Engineer',
            'Intern',
            'None'
        ]
    }
]


const questionForIntern = [
    {
        type: 'input',
        message: 'What is a name of Intern?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is an id of Intern?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is an email address of Intern?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Which school does Intern go?',
        name: 'school',
    },
    {
        type: 'list',
        message: 'If you want to add a team member, which role do you want to add?',
        name: 'teamMember',
        choices: [
            'Engineer',
            'Intern',
            'None'
        ]
    }
]

// promt

const promptManager = () => {
    writeInit();
    inquirer.promt(questionForManager)
    .then((resolve) => {
        const {name, id, email, officeNumber} = resolve;
        const manager = new Manager(name, id, email, officeNumber);
        inputManager(manager);

        switch(resolve.team) {
            case 'Engineer':
                promptEngineer();
            case 'Intern':
                promptIntern();
            case 'None':
                writeClose();
                break;
        }

    })
};

const promptEngineer = () => {
    writeInit();
    inquirer.promt(questionForEngineer)
    .then((resolve) => {
        const {name, id, email, github} = resolve;
        const engineer = new Engineer(name, id, email, github);
        inputEngineer(engineer);

        switch(resolve.team) {
            case 'Engineer':
                promptEngineer();
            case 'Intern':
                promptIntern();
            case 'None':
                writeClose();
                break;
        }

    })
};

const promptIntern = () => {
    writeInit();
    inquirer.promt(questionForIntern)
    .then((resolve) => {
        const {name, id, email, school} = resolve;
        const intern = new Intern(name, id, email, school);
        inputIntern(intern);

        switch(resolve.team) {
            case 'Engineer':
                promptEngineer();
            case 'Intern':
                promptIntern();
            case 'None':
                writeClose();
                break;
        }

    })
};

// writeFile
const writeInit = () => {
    fs.appendFile('./dist/index.html', PageTemplate.generateInit(), (err) => err? console.error(err) : console.log('Create your team chart!'))
}

const writeClose = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.closingHTML(employees), (err) => err? console.error(err) : console.log('Team chart created'))
}

const inputManager = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateManager(employees), (err) => err? console.error(err) : console.log('Successfully added'))
}

const inputEngineer = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateEngineer(employees), (err) => err? console.error(err) : console.log('Successfully added'))
}

const inputIntern = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateIntern(employees), (err) => err? console.error(err) : console.log('Successfully added'))
}


// run
promptManager();