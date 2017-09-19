"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerArgs;
function registerArgs(commands, name, args) {
  commands.forEach(function (command) {
    if (process.argv.indexOf(command) != -1) {
      args[name] = process.argv[process.argv.indexOf(command) + 1];
    }
  });
}