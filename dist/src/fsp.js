'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fsp;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* filestream as promise */
function fsp(name, filename, filedata) {
  console.log(('Adding ' + filename).green);
  return new Promise(function (res, rej) {
    _fs2.default.writeFile('./' + name + '/' + filename, filedata, function (err) {
      if (err) {
        return console.log(err);
      }
      res(null);
    });
  });
}