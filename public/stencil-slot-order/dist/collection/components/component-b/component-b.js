import { h } from "@stencil/core";
export class ComponentB {
    render() {
        return (h("component-a", null,
            h("slot", null)));
    }
    static get is() { return "component-b"; }
}
