'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-675d3f4b.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["component-a_2.cjs",[[4,"component-b"],[4,"component-a"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
