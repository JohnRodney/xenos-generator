import 'colors';
import fsp from './fsp';
import helpText from './help';
import registerArgs from './register-args';
import typeGeneratorMap from './type-generator-map';

/* Setup an object for storing arguement key value pairs passed to this program */
const args = {};
/* Register the type and name arguements so they are stored in the args object */
registerArgs(['-type', '-t'], "type", args)
registerArgs(['-name', '-n'], "name", args)

/* Check if the help flags were triggered or no arguements were passed */
if(process.argv.indexOf("-help") != -1 || process.argv.indexOf("-h") != -1 || process.argv.length === 2) {
  /* Output the help data and exit the process */
  console.log(helpText().blue)
  process.exit(1)
}

typeGeneratorMap[args.type](args);
