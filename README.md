# stencil-slots
## Demonstrate React app problems managing Stencil container components.

This is a React app, based on create-react-app, which loads a component library made in Stencil.

The library consists of Stencil container tags with Shadow DOM off, which insert DOM levels between the Host and the &lt;slot /&gt;.

* component-a: Inserts a div between host and &lt;slot /&gt;.
* component-b: Renders its &lt;slot /&gt; inside component-a.

When React manages the children of the Stencil container tag, it fails to add and remove them correctly.

When adding more children, they are inserted outside component-a.

When adding fewer children, React throws a console error, and app fails to render.

The Stencil component library is built from this project: https://github.com/bbellmyers/stencil-slot-order
