import es6PackageJson from '../templates/es6/package.json';
import es6Babelrc from '../templates/es6/.babelrc';
import es6Gitignore from '../templates/es6/.gitignore';
import logo from 'asciiart-logo';
import 'colors';
import { exec } from 'child_process';
import fs from 'fs';

const args = {};
let help = logo({
    name: "Xeno's Generator",
    font: 'Colossal',
    lineChars: 5,
    padding: 5,
    margin: 0
  })
  .emptyLine()
  .right('version 69.666.1337')
  .emptyLine()
  .wrap('Supported Commands:')
  .emptyLine()
  .wrap('-help or -h or no arguements: Help menu')
  .wrap('-type or -t: the project type')
  .wrap('-name or -n: the project name')
  .render();


if(process.argv.indexOf("-help") != -1 || process.argv.indexOf("-h") != -1 || process.argv.length === 2){
  console.log(help.blue)
  process.exit(1)
}

registerArgs(['-type', '-t'], "type")
registerArgs(['-name', '-n'], "name")

function registerArgs(commands, name) {
  commands.forEach(command => {
    if(process.argv.indexOf(command) != -1) {
      args[name] = process.argv[process.argv.indexOf(command) + 1];
    }
  });
}

const { type } = args;
if (type === 'es6NodeServer') {
  generateEs6NodeServer(args)
}

function generateEs6NodeServer(args) {
  const { name } = args;
  let thread;
  console.log(`Creating Directory - [${name}] \n`.yellow)
  thread = execp(`mkdir ${name}`, null).catch(err => console.log(err))
  thread.then(() => {
    console.log('Adding package.json'.green)
    return new Promise((res, rej) => {
      fs.writeFile(`./${name}/package.json`, es6PackageJson(name), (err) => {
        if(err) {
          return console.log(err);
        }
        res(null)
      });
    })
  }).then(() => execp(`npm install`, { cwd: `./${name}/` }).then(() => {
    console.log('Adding .babelrc'.green)
    return new Promise((res, rej) => {
      fs.writeFile(`./${name}/.babelrc`, es6Babelrc(), (err) => {
        if(err) {
          return console.log(err);
        }
        res(null)
      });
    })
  }).then(() => {
    console.log(`Creating Directory - [${name}/src/] \n`.yellow)
    return execp(`mkdir src`, { cwd: `./${name}/` })
  }).then(() => {
    console.log(`Creating Directory - [${name}/dist/] \n`.yellow)
    return execp(`mkdir dist`, { cwd: `./${name}/` })
  }).then(() => {
    console.log(`Creating File - ${name}/src/index.js] \n`.yellow)
    return execp(`touch index.js`, { cwd: `./${name}/src/` })
  }).then(() => {
    console.log(`Git Init`.yellow)
    return execp(`git init`, { cwd: `./${name}/` })
  }).then(() => {
    console.log('Adding .gitignore'.green)
    return new Promise((res, rej) => {
      fs.writeFile(`./${name}/.gitignore`, es6Gitignore(), (err) => {
        if(err) {
          return console.log(err);
        }
        res(null)
      });
    })
  })
    .catch(err => console.log(err)));

}

function execp(cmd, options) {
  return new Promise((res, rej) => {
    exec(cmd, options, (err, stdout, stderr) => {
      if (err || stderr) {
        console.log(`${err} \n${stderr} \n`.red, `  - while running command ${cmd}\n`.blue)
        res(null);
      }
      res(stdout);
    })
  });
}
