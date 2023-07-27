const fs = require("fs-extra");
const glob = require("glob");

const sourcePattern = process.argv[2];
const destinationPath = process.argv[3];

glob(sourcePattern, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    fs.copy(file, destinationPath, (err) => {
      if (err) throw err;
    });
  });
});
