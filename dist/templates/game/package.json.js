"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return "\n{\n  \"name\": \"" + name + "\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Project generated automatically insert description here before publishing\",\n  \"main\": \"index.js\",\n  \"repository\": \"Your Git URL\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",\n    \"dev-compiler\": \"babel -w . --ignore node_modules,dist --out-dir dist\",\n    \"bundle\": \"./node_modules/.bin/browserify dist/src/index.js -o ./dist/bundle.js\",\n    \"dev-server\": \"live-server\"\n  },\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n  },\n  \"devDependencies\": {\n    \"babel-preset-env\": \"^1.6.0\",\n    \"browserify\": \"^14.5.0\"\n  }\n}\n  ";
};