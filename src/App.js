import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      children: [1,2],
    };
    this.moreChildren = this.moreChildren.bind(this);
    this.fewerChildren = this.fewerChildren.bind(this);
  }

  moreChildren() {
    this.setState({
      children: [1,2,3]
    });
  }

  fewerChildren() {
    this.setState({
      children: [1]
    })
  }

  render() {
    const { children } = this.state;
    return (
      <div className="App">
        <p>
          Given: one or more nested Stencil container tags with Shadow DOM off,
          which insert DOM levels between the Host and the &lt;slot /&gt;.
          <ul>
            <li><span className="component-a">component-a</span>: Inserts a div between host and &lt;slot /&gt;.</li>
            <li><span className="component-b">component-b</span>: Renders its &lt;slot /&gt; inside component-a</li>
          </ul>
        </p>
        <p>
          When React manages the children of the Stencil container tag, it fails
          to add and remove them correctly.
        </p>
        <component-b>
          {children.map((child, index) => (
            <div className="example" key={`item-${index}`}>child {child}</div>
          ))}
        </component-b>
        <button onClick={this.moreChildren}>More children</button>&nbsp;
        <button onClick={this.fewerChildren}>Fewer children</button>
        <p>
          Click "More children" - new div is inserted outside component-a.
        </p>
        <p>
          Click "Fewer children" - throws a console error, and app fails to render.
        </p>
      </div>
    );
  }
}

export default App;
