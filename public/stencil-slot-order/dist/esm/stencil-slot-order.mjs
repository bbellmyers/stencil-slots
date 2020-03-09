import { p as patchBrowser, b as bootstrapLazy } from './core-20647eeb.js';

patchBrowser().then(options => {
  return bootstrapLazy([["component-a_2",[[4,"component-b"],[4,"component-a"]]]], options);
});
