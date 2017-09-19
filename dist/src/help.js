'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return (0, _asciiartLogo2.default)({
        name: "Xeno's Generator",
        font: 'Colossal',
        lineChars: 5,
        padding: 5,
        margin: 0
    }).emptyLine().right('version 69.666.1337').emptyLine().wrap('Supported Commands:').emptyLine().wrap('-help or -h or no arguements: Help menu').wrap('-type or -t: the project type').wrap('-name or -n: the project name').render();
};

var _asciiartLogo = require('asciiart-logo');

var _asciiartLogo2 = _interopRequireDefault(_asciiartLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }