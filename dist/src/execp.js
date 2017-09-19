'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = execp;

var _child_process = require('child_process');

/* Promise version of exec */
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