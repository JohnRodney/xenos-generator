import fs from 'fs';
/* filestream as promise */
export default function fsp(name, filename, filedata) {
  console.log(`Adding ${filename}`.green)
  return new Promise((res, rej) => {
    fs.writeFile(`./${name}/${filename}`, filedata, (err) => {
      if(err) {
        return console.log(err);
      }
      res(null)
    });
  })
}

