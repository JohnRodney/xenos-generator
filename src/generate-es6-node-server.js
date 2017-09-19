import execp from './execp';
import fsp from './fsp';
import es6PackageJson from '../templates/es6/package.json';
import es6Babelrc from '../templates/es6/.babelrc';
import es6Gitignore from '../templates/es6/.gitignore';


export default function generateEs6NodeServer(args) {
  const { name } = args;

  console.log(`Creating Directory - [${name}] \n`.yellow)
  execp(`mkdir ${name}`, null)
    .then(() => fsp(name, 'package.json', es6PackageJson(name)))
    .then(() => execp(`npm install`, { cwd: `./${name}/` })
    .then(() => fsp(name, '.babelrc', es6Babelrc()))
    .then(() => {
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
    }).then(fsp(name, '.gitignore', es6Gitignore()))
    .catch(err => console.log(err)));
}
