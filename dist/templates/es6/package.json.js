"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return "\n      {\n      \"name\": \"" + name + "\",\n      \"version\": \"1.0.0\",\n      \"description\": \"Project generated automatically insert description here before publishing\",\n      \"main\": \"index.js\",\n      \"repository\": \"Your Git URL\",\n      \"scripts\": {\n        \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n        \"dev-compiler\": \"babel -w . --ignore node_modules,dist --out-dir dist\",\n        \"dev-server\": \"forever -w ./dist/index.js node ./dist/index.js\"\n      },\n      \"author\": \"\",\n      \"license\": \"ISC\",\n      \"dependencies\": {\n        \"body-parser\": \"^1.18.1\",\n        \"express\": \"^4.15.4\",\n        \"moment\": \"^2.18.1\",\n        \"mongodb\": \"^2.2.31\",\n        \"request\": \"^2.81.0\",\n        \"request-promise\": \"^4.2.1\"\n      },\n      \"devDependencies\": {\n        \"babel-preset-env\": \"^1.6.0\"\n      }\n    }\n  ";
};