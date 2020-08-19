const {resolve} = require('path');
const {version} = require(resolve('./package.json'));

if (version) {
  console.log(`::set-output name=version::${version}`);
}