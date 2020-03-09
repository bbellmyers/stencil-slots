'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-675d3f4b.js');

const ComponentA = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: "component-a-inserted" }, core.h("slot", null)));
    }
};

const ComponentB = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("component-a", null, core.h("slot", null)));
    }
};

exports.component_a = ComponentA;
exports.component_b = ComponentB;
