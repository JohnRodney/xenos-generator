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
    .wrap('-help or -h or no arguements: Help menu')
    .wrap('-type or -t: the project type')
    .wrap('-name or -n: the project name')
    .render();
}();
