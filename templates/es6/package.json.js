export default function(name) {
  return `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "Project generated automatically insert description here before publishing",
  "main": "index.js",
  "repository": "Your Git URL",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "dev-compiler": "babel -w . --ignore node_modules,dist --out-dir dist",
    "dev-server": "forever -w ./dist/src/index.js node ./dist/src/index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.1",
    "express": "^4.15.4",
    "moment": "^2.18.1",
    "mongodb": "^2.2.31",
    "request": "^2.81.0",
    "request-promise": "^4.2.1"
  },
  "devDependencies": {
    "babel-preset-env": "^1.6.0"
  }
}
  `;
}
