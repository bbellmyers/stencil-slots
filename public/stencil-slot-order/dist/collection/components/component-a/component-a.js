import { h } from "@stencil/core";
export class ComponentA {
    render() {
        return (h("div", { class: "component-a-inserted" },
            h("slot", null)));
    }
    static get is() { return "component-a"; }
}
