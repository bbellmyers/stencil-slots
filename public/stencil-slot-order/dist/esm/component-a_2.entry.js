import { r as registerInstance, h } from './core-20647eeb.js';

const ComponentA = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "component-a-inserted" }, h("slot", null)));
    }
};

const ComponentB = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("component-a", null, h("slot", null)));
    }
};

export { ComponentA as component_a, ComponentB as component_b };
