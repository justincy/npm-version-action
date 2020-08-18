const {version} = require('./package.json');

if (version) {
  console.log(`::set-output name=version::${version}`);
}