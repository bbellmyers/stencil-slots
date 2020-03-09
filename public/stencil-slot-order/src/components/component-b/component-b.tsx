import { Component, h } from '@stencil/core';

@Component ({
  tag: 'component-b',
  shadow: false,
})
export class ComponentB{
  render() {
    return (
      <component-a>
          <slot />
      </component-a>
    );
  }
}
