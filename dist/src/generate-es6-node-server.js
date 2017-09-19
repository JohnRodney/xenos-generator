'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateEs6NodeServer;

var _execp = require('./execp');

var _execp2 = _interopRequireDefault(_execp);

var _fsp = require('./fsp');

var _fsp2 = _interopRequireDefault(_fsp);

var _package = require('../templates/es6/package.json');

var _package2 = _interopRequireDefault(_package);

var _babelrc = require('../templates/es6/.babelrc');

var _babelrc2 = _interopRequireDefault(_babelrc);

var _gitignore = require('../templates/es6/.gitignore');

var _gitignore2 = _interopRequireDefault(_gitignore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateEs6NodeServer(args) {
  var name = args.name;


  console.log(('Creating Directory - [' + name + '] \n').yellow);
  (0, _execp2.default)('mkdir ' + name, null).then(function () {
    return (0, _fsp2.default)(name, 'package.json', (0, _package2.default)(name));
  }).then(function () {
    return (0, _execp2.default)('npm install', { cwd: './' + name + '/' }).then(function () {
      return (0, _fsp2.default)(name, '.babelrc', (0, _babelrc2.default)());
    }).then(function () {
      console.log(('Creating Directory - [' + name + '/src/] \n').yellow);
      return (0, _execp2.default)('mkdir src', { cwd: './' + name + '/' });
    }).then(function () {
      console.log(('Creating Directory - [' + name + '/dist/] \n').yellow);
      return (0, _execp2.default)('mkdir dist', { cwd: './' + name + '/' });
    }).then(function () {
      console.log(('Creating File - ' + name + '/src/index.js] \n').yellow);
      return (0, _execp2.default)('touch index.js', { cwd: './' + name + '/src/' });
    }).then(function () {
      console.log('Git Init'.yellow);
      return (0, _execp2.default)('git init', { cwd: './' + name + '/' });
    }).then((0, _fsp2.default)(name, '.gitignore', (0, _gitignore2.default)())).catch(function (err) {
      return console.log(err);
    });
  });
}