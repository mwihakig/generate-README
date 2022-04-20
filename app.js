const inquirer = require('inquirer');
 const fs = require('fs');
 const generatePage = require('./page-template');
 generatePage();


//const name = 'Mwihaki Githii'
//const github = 'mwihakig'


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'usernameInput',
        message: 'Enter your GitHub username (Required)',
        validate: usernameInput => {
          if ( usernameInput) {
            return true;
          } else {
            console.log('Please enter your Github usernmae');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Project Name',
        message: 'Please enter the project name'
      },
      {
        type: 'input',
        name: 'usernameInput',
        message: 'Project Name (Required)',
        validate: usernameInput => {
          if ( usernameInput) {
            return true;
          } else {
            console.log('usernameinput');
            return false;
          }
        }
      }
      ,
      {
        type: 'input',
        name: 'usernameInput',
        message: 'Enter your Project Description'
      }
      ,
      
      {
        type: 'input',
        name: 'usernameInput',
        message: 'Enter the Project Github link'
      },
      {
        type: 'input',
        name: 'usernameInput',
        message: 'Project Github link (Required)',
        validate: usernameInput => {
          if ( usernameInput) {
            return true;
          } else {
            console.log('usernameinput');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => {
          if (confirmAbout) {
            return true;
          } else {
            return false;
          }
        }
      }
    ]);
  };
  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
        
      }
      
    ]);
  };

  promptUser()
  .then(promptProject)
  .then(portfolioData => {
     const pageHTML = generatePage(portfolioData);
     generatePage()

     fs.writeFile('./index.html', pageHTML, err => {
       if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });

  
  
 // .then(projectAnswers => console.log(projectAnswers));

//const fs = require('fs');
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});





//const generatePage = (name, github) => {
//  return `
  //<!DOCTYPE html> 
//  <html lang="en"> 
  //<head>
    //<meta charset="UTF-8">
  //  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //  <meta http-equiv="X-UA-Compatible" content="ie=edge">
 //   <title>Portfolio Demo</title>
 // </head>

  //<body>
    //<h1>${name}</h1>
    //<h2><a href="https://github.com/${github}">Github</a></h2>
  //</body>
  //</html>
  //`;
//};

//fs.writeFile('./index.html', generatePage(name, github), err => {
  //if (err) throw new Error(err);

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});





  })
