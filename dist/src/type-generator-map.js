'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateEs6NodeServer = require('./generate-es6-node-server');

var _generateEs6NodeServer2 = _interopRequireDefault(_generateEs6NodeServer);

var _generateEs6GameWebpack = require('./generate-es6-game-webpack');

var _generateEs6GameWebpack2 = _interopRequireDefault(_generateEs6GameWebpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'es6NodeServer': _generateEs6NodeServer2.default,
  'es6GameWebpack': _generateEs6GameWebpack2.default
};