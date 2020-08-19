const {execSync} = require('child_process');
const {version} = require('./package.json');

console.log(execSync('pwd'));
console.log(execSync('ls -al'));

if (version) {
  console.log(`::set-output name=version::${version}`);
}