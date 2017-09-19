'use strict';

require('colors');

var _fsp = require('./fsp');

var _fsp2 = _interopRequireDefault(_fsp);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _registerArgs = require('./register-args');

var _registerArgs2 = _interopRequireDefault(_registerArgs);

var _generateEs6NodeServer = require('./generate-es6-node-server');

var _generateEs6NodeServer2 = _interopRequireDefault(_generateEs6NodeServer);

var _typeGeneratorMap = require('./type-generator-map');

var _typeGeneratorMap2 = _interopRequireDefault(_typeGeneratorMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Setup an object for storing arguement key value pairs passed to this program */
var args = {};
/* Register the type and name arguements so they are stored in the args object */
(0, _registerArgs2.default)(['-type', '-t'], "type", args);
(0, _registerArgs2.default)(['-name', '-n'], "name", args);

/* Check if the help flags were triggered or no arguements were passed */
if (process.argv.indexOf("-help") != -1 || process.argv.indexOf("-h") != -1 || process.argv.length === 2) {
  /* Output the help data and exit the process */
  console.log((0, _help2.default)().blue);
  process.exit(1);
}

_typeGeneratorMap2.default[args.type](args);