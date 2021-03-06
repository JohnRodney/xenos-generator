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
    "bundle": "./node_modules/.bin/browserify dist/src/index.js -o ./dist/bundle.js",
    "dev-server": "live-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
  },
  "devDependencies": {
    "babel-preset-env": "^1.6.0",
    "browserify": "^14.5.0"
  }
}
  `;
}
