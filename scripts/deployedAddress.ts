const path = require('path');
const fs = require('fs');

const buildPaht = path.join(__dirname, '..', 'build', 'contracts');

// console.log(path.join(__dirname, '..'));
//
// console.log(fs.readdirSync(buildPaht));

let data = fs.readdirSync(buildPaht)
  .map(f => require(path.join(buildPaht, f)))
  .filter(c => c.networks['42']);

console.table(data.map(c => [c.contractName, c.networks['42']['address']]))
