'use strict';

const core = require('./core-675d3f4b.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["component-a_2.cjs",[[4,"component-b"],[4,"component-a"]]]], options);
});
