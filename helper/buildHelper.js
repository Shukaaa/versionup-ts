// copy ./README.md to ./dist/README.md
const fs = require('fs');
fs.copyFileSync('./README.md', './dist/README.md');

// delete ./dist/lib
fs.rmdir('./dist/lib', () => {});
