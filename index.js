//libs for the example
let fs = require('fs');

//the functions available in replacement.js
const { replacement, stringReplacement } = require('./replacement.js');

//generate a replacement engine from a file
const replacementEngine = replacement(require('./options.json'));

//arrays are randomized
for (let i = 0; i < 10; i++) {
	console.log(replacementEngine('random'));
}

//the engine takes parameters
console.log(replacementEngine('parameters', 'hello', 'world'));

//a standalone implementation that works on single strings (such as files) - no json formatting
const templateString = fs.readFileSync('./index.html.t', 'utf8');

console.log(stringReplacement(templateString, "My Awesome Website!", "Come and check out my website!"));

