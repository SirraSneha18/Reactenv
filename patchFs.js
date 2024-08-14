// patchFs.js
const fs = require('graceful-fs');
// This will replace the global fs module with graceful-fs
require('fs').ReadStream = fs.ReadStream;
require('fs').WriteStream = fs.WriteStream;
require('fs').open = fs.open;
require('fs').read = fs.read;
require('fs').write = fs.write;
require('fs').close = fs.close;
