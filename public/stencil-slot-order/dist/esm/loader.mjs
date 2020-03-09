import { a as patchEsm, b as bootstrapLazy } from './core-20647eeb.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["component-a_2",[[4,"component-b"],[4,"component-a"]]]], options);
  });
};

export { defineCustomElements };
