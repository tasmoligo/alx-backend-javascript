const { readFile } = require('fs');

function readDatabase(file_path) {
  const firstName = {};
  const field = {};
  return new Promise((resolve, reject) => {
    readFile(file_path, (error, data) => {
      if (error) {
        console.error(error)
      } else {
        const lines = data.toString().split(' ');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
          }
          if (lines[i] === ' ' || lines[i] === '\n')
        }
      }
    })
  })
}
