'use strict';

var _package = require('../templates/es6/package.json');

var _package2 = _interopRequireDefault(_package);

var _babelrc = require('../templates/es6/.babelrc');

var _babelrc2 = _interopRequireDefault(_babelrc);

var _gitignore = require('../templates/es6/.gitignore');

var _gitignore2 = _interopRequireDefault(_gitignore);

var _asciiartLogo = require('asciiart-logo');

var _asciiartLogo2 = _interopRequireDefault(_asciiartLogo);

require('colors');

var _child_process = require('child_process');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = {};
var help = (0, _asciiartLogo2.default)({
  name: "Xeno's Generator",
  font: 'Colossal',
  lineChars: 5,
  padding: 5,
  margin: 0
}).emptyLine().right('version 69.666.1337').emptyLine().wrap('Supported Commands:').emptyLine().wrap('-help or -h or no arguements: Help menu').wrap('-type or -t: the project type').wrap('-name or -n: the project name').render();

if (process.argv.indexOf("-help") != -1 || process.argv.indexOf("-h") != -1 || process.argv.length === 2) {
  console.log(help.blue);
  process.exit(1);
}

registerArgs(['-type', '-t'], "type");
registerArgs(['-name', '-n'], "name");

function registerArgs(commands, name) {
  commands.forEach(function (command) {
    if (process.argv.indexOf(command) != -1) {
      args[name] = process.argv[process.argv.indexOf(command) + 1];
    }
  });
}

var type = args.type;

if (type === 'es6NodeServer') {
  generateEs6NodeServer(args);
}

function generateEs6NodeServer(args) {
  var name = args.name;

  var thread = void 0;
  console.log(('Creating Directory - [' + name + '] \n').yellow);
  thread = execp('mkdir ' + name, null).catch(function (err) {
    return console.log(err);
  });
  thread.then(function () {
    console.log('Adding package.json'.green);
    return new Promise(function (res, rej) {
      _fs2.default.writeFile('./' + name + '/package.json', (0, _package2.default)(name), function (err) {
        if (err) {
          return console.log(err);
        }
        res(null);
      });
    });
  }).then(function () {
    return execp('npm install', { cwd: './' + name + '/' }).then(function () {
      console.log('Adding .babelrc'.green);
      return new Promise(function (res, rej) {
        _fs2.default.writeFile('./' + name + '/.babelrc', (0, _babelrc2.default)(), function (err) {
          if (err) {
            return console.log(err);
          }
          res(null);
        });
      });
    }).then(function () {
      console.log(('Creating Directory - [' + name + '/src/] \n').yellow);
      return execp('mkdir src', { cwd: './' + name + '/' });
    }).then(function () {
      console.log(('Creating Directory - [' + name + '/dist/] \n').yellow);
      return execp('mkdir dist', { cwd: './' + name + '/' });
    }).then(function () {
      console.log(('Creating File - ' + name + '/src/index.js] \n').yellow);
      return execp('touch index.js', { cwd: './' + name + '/src/' });
    }).then(function () {
      console.log('Git Init'.yellow);
      return execp('git init', { cwd: './' + name + '/' });
    }).then(function () {
      console.log('Adding .gitignore'.green);
      return new Promise(function (res, rej) {
        _fs2.default.writeFile('./' + name + '/.gitignore', (0, _gitignore2.default)(), function (err) {
          if (err) {
            return console.log(err);
          }
          res(null);
        });
      });
    }).catch(function (err) {
      return console.log(err);
    });
  });
}

function execp(cmd, options) {
  return new Promise(function (res, rej) {
    (0, _child_process.exec)(cmd, options, function (err, stdout, stderr) {
      if (err || stderr) {
        console.log((err + ' \n' + stderr + ' \n').red, ('  - while running command ' + cmd + '\n').blue);
        res(null);
      }
      res(stdout);
    });
  });
}