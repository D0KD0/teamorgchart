const inquirer = require('inquirer');
const PageTemplate = require('./src/page_template')
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const questionForManager = [
    {
        type: 'input',
        message: 'What is a name of Team manager?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is an id of Team manager?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is an email address of Team manager?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is an office number of Team manager?',
        name: 'officeNumber'
    },
    {
        type: 'list',
        message: 'If you want to add a team member, which role do you want to add?',
        name: 'team',
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
        name: 'team',
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
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'None'
        ]
    }
]

const promptManager = () => {
    writeInit();
    inquirer.prompt(questionForManager)
    .then((res) => {
        const {name, id, email, officeNumber} = res;
        const manager = new Manager(name, id, email, officeNumber);

        inputManager(manager);

        switch(res.team) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'None':
                writeClose();
                break;
        }

    })
};

const promptEngineer = () => {
    writeInit();
    inquirer.prompt(questionForEngineer)
    .then((res) => {
        const {name, id, email, github} = res;
        const engineer = new Engineer(name, id, email, github);

        inputEngineer(engineer);

        switch(res.team) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'None':
                writeClose();
                break;
        }

    })
};

const promptIntern = () => {
    writeInit();
    inquirer.prompt(questionForIntern)
    .then((res) => {
        const {name, id, email, school} = res;
        const intern = new Intern(name, id, email, school);
        
        inputIntern(intern);

        switch(res.team) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'None':
                writeClose();
                break;
        }

    })
};


const writeInit = () => {
    fs.appendFile('./dist/index.html', PageTemplate.generateInit(), (err) => err? console.error(err) : console.log('Create your team chart!'))
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

const writeClose = () => {
    fs.appendFile('./dist/index.html', PageTemplate.closingHTML(), (err) => err? console.error(err) : console.log('Team chart created'))
}


promptManager();