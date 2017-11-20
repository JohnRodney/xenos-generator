import execp from './execp';
import fsp from './fsp';
import gamePackageJson from '../templates/game/package.json';
import gameBabelrc from '../templates/game/.babelrc';
import gameGitignore from '../templates/game/.gitignore';
import gameHtml from '../templates/game/index.html';

export default function es6GameWebpack(args) {
  const { name } = args;

  console.log(`Creating Directory - [${name}] \n`.yellow)
  execp(`mkdir ${name}`, null)
    .then(() => fsp(name, 'package.json', gamePackageJson(name)))
    .then(() => execp(`npm install`, { cwd: `./${name}/` })
    .then(() => fsp(name, '.babelrc', gameBabelrc()))
    .then(() => fsp(name, 'index.html', gameHtml()))
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
    }).then(fsp(name, '.gitignore', gameGitignore()))
    .catch(err => console.log(err)));
}
