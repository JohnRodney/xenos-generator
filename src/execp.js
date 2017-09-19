import { exec } from 'child_process';
/* Promise version of exec */
export default function execp(cmd, options) {
  return new Promise((res, rej) => {
    exec(cmd, options, (err, stdout, stderr) => {
      if (err || stderr) {
        console.log(`${err} \n${stderr} \n`.red, `  - while running command ${cmd}\n`.blue)
        res(null);
      }
      res(stdout);
    })
  });
}
