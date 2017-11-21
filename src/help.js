import logo from 'asciiart-logo';

export default function() {
  return logo({
      name: "Xeno's Generator",
      font: 'Colossal',
      lineChars: 5,
      padding: 5,
      margin: 0
    })
    .emptyLine()
    .right('version 69.666.1337')
    .emptyLine()
    .wrap('Supported Commands:')
    .emptyLine()
    .wrap('-help or -h or no arguments: Help menu')
    .wrap('-type or -t: the project type')
    .wrap('supported types: ')
    .wrap('* es6NodeServer')
    .wrap('* es6GameWebpack')
    .wrap('-name or -n: the project name')
    .render();
};
