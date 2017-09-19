export default function registerArgs(commands, name, args) {
  commands.forEach(command => {
    if(process.argv.indexOf(command) != -1) {
      args[name] = process.argv[process.argv.indexOf(command) + 1];
    }
  });
}
