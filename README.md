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

## Stop-gap Solution
If you alter the example to add a React key attribute that is driven by the
mapped children array length, then you can force a repaint of the entire
container component, avoiding this failure condition (at the expense of
rendering performance, unfortunately):

```
<component-b key={`component-b-${children.length}`}>
  {children.map((child, index) => (
    <div className="example"
      key={`item-${index}`}>child {child}</div>
  ))}
</component-b>
```

## Stencil Issue
I have logged the following issue with the Stencil project: https://github.com/ionic-team/stencil/issues/2259
