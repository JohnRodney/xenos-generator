'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = es6GameWebpack;

var _execp = require('./execp');

var _execp2 = _interopRequireDefault(_execp);

var _fsp = require('./fsp');

var _fsp2 = _interopRequireDefault(_fsp);

var _package = require('../templates/game/package.json');

var _package2 = _interopRequireDefault(_package);

var _babelrc = require('../templates/game/.babelrc');

var _babelrc2 = _interopRequireDefault(_babelrc);

var _gitignore = require('../templates/game/.gitignore');

var _gitignore2 = _interopRequireDefault(_gitignore);

var _index = require('../templates/game/index.html');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function es6GameWebpack(args) {
  var name = args.name;


  console.log(('Creating Directory - [' + name + '] \n').yellow);
  (0, _execp2.default)('mkdir ' + name, null).then(function () {
    return (0, _fsp2.default)(name, 'package.json', (0, _package2.default)(name));
  }).then(function () {
    return (0, _execp2.default)('npm install', { cwd: './' + name + '/' }).then(function () {
      return (0, _fsp2.default)(name, '.babelrc', (0, _babelrc2.default)());
    }).then(function () {
      return (0, _fsp2.default)(name, 'index.html', (0, _index2.default)());
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