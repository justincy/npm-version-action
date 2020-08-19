const {execSync} = require('child_process');
const {version} = require('./package.json');

console.log('pwd:', execSync('pwd').toString());
console.log(execSync('ls -al').toString());
console.log(execSync('ls -al ..').toString());

if (version) {
  console.log(`::set-output name=version::${version}`);
}