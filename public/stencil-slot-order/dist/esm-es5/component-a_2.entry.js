import { r as registerInstance, h } from './core-20647eeb.js';
var ComponentA = /** @class */ (function () {
    function ComponentA(hostRef) {
        registerInstance(this, hostRef);
    }
    ComponentA.prototype.render = function () {
        return (h("div", { class: "component-a-inserted" }, h("slot", null)));
    };
    return ComponentA;
}());
var ComponentB = /** @class */ (function () {
    function ComponentB(hostRef) {
        registerInstance(this, hostRef);
    }
    ComponentB.prototype.render = function () {
        return (h("component-a", null, h("slot", null)));
    };
    return ComponentB;
}());
export { ComponentA as component_a, ComponentB as component_b };
