var path = require('path');

/**
 * Import specs
 * @private
 */
var dir = '../test/specs/';
[
  'tokenizer',
  'postagger',
  'chunking',
  'qtypes',
].forEach((script) => {
  require(path.join(dir, script));
});