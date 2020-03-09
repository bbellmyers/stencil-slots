import { a as patchEsm, b as bootstrapLazy } from './core-20647eeb.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["component-a_2", [[4, "component-b"], [4, "component-a"]]]], options);
    });
};
export { defineCustomElements };
