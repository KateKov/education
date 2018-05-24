## **REACTJS**

### -   *What is ReactJs?*
ReactJs is a JS library which follows the component based approach that helps in building reusable UI components. It is used for developing complex and interactive web and mobil UI.
### -   *Why I should use ReactJs?*
Because it increases the application's performance. It also used JSX, that increases code's readability. ReactJs is easy to integrate with other frameworks. Writing UI test cases become easy. 
### -   *What are the features of ReactJs?*
1. ```Virtual DOM``` instead of the real DOM. 
2. ```Server-side rendering```
3. ```Uni-directional data flow``` (data flows from parent to child)
### -  *What is the Virtual DOM?*
It is a lightweight JS object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. 
### - *How the Virtual DOM works?*
1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
2. Then the difference between the previous DOM representation and the new one is calculated.
3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.
### -   *How to render a React element into the DOM?*
By using ReactDOM.render():
```javascript
ReactDOM.render(element, document.getElementById('root'));
```
>React DOM compares the elemnt and its children to the previous one, and ```only``` applies the DOM updates necessary to bring the DOM to the desired state. 
### - *What is a component?*
It is the building block of a React application's UI. It is like JS function: it accept arbitrary inputs (props) and return React element describing what should apper on the screen (through the render() function).
Components let us split UI into independent, reusable pieces and think about each piece in isolation.
>Each React component must have a render() mandatorily. It must return a single parent tag. It must be kept pure i.r., it must return the same result each time it is invoked.

> We can use <React.Fragment> to group a list of children without adding extra nodes to the DOM.

### -   *What is JSX?*
It is a syntax extension to JavaScript and stands as JavaScript XML. 
ReactJs doesn't separate technologies by putting markup and logic in separate files, it ```separates concerns``` with loosely coupled units calles 'components'. JSX is helpful as a visual aid when working with UI inside the JS code and allows ReactJs to show more useful error and warning messages.
Example (ES6):
```javascript
import React from 'react';

class Example extends React.Component {
    render(){
        return <div> Example </div>;
    }
}
```
This tag syntax inside a render function is JSX. 
We can use this component with JSX as follows
```javascript
<Example />
```
It compiles to
```javascript
React.createElement(
    Example,
    null,
    null
)
```
Where is the first parameter is the type of component, the second type is props (stands for properties) and other input parameters are children. 
We can also embed JavaScript expression in JSX using curly braces. 
> We should always start component with a capital letter, so JSX will be know that it is reffering toa React component
### -   *How to enable browsers to read JSX?*
By using JSX transformers like Babel.  
### - *What is Props?*
An object, that React creates based on JSX attributes passed to the React component. It is the way we get data into the components.
>Props must be read-only. 

They are always passed down from the parent to the child components through out the application. A child component can never send a prop back to the parent component. 
### - *How to pass the whole props object easily?*
We can use ... as a "spread" operator to pass the whole props object. 
```javascript
<Example {...props}/>
```
We also can use ...other to separate some props from others
```javascript
const Button = props = > {
   const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button {...other} />;
}
```
##### But there is a threat to pass unnecessary properties #####
### - *How we can render lists inside a component?*
By using JS functions. For example, map()
```javascript
const listItems = numbers.map((number) =>
  <li key-{number.toString()>{number}</li>
);
```
>Keys should be given to the elements inside the array to give the elements a stable identity
### - *What is a State?*
State is object that holds data. State is similar to props, but it is private and fully controlled by the component. 
State lives inside of a component and stores data that component and its children may need.
> We mustn't update the state directly.

We can update state by using this.setState().
> State updates may be asynchronous so we should use setState() that accepts a function rather that object

> State updates are merged. We can update variables independetly

Normally components don’t have state and so are referred to as stateless. A component using state is known as stateful. 
### -  *What is the arrow function?*
Arrow functions are more of brief syntax for writing the function expression.
These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.
### - *What are the lifecylcle methods of React components?*
##### Mounting #####
A component is being created and inserted into the DOM.
1. `constructor()`
2. `static getDerivedStateFromProps()` - Executed just before calling the render method. It should return an object to update the state or null to update nothing
3. `componentWillMount()` – Executed just before rendering takes place both on the client as well as server-side.
4. `render()`
5. `componentDidMount()` – Executed on the client side only after the first render.
##### Updating #####
Props or state was changed
1. `componentWillReceiveProps() `– Invoked as soon as the props are received from the parent class and before another render is called.
2. `static getDerivedStateFromProps()`
3. `shouldComponentUpdate()` – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
4. `componentWillUpdate()` – Called just before rendering takes place in the DOM.
5. `render()`
6. `getSnapshotBeforeUpdate() `- Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables our component to capture current values.
7. `componentDidUpdate()` – Called immediately after rendering takes place.
##### Unmounting #####
A component is destroyed and removed from the DOM.
1. `componentWillUnmount()` – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.
##### Error Handling #####
There is an error during rendering
1. `componentDidCatch()` - lets us capture an unhandled JavaScript error in the below tree and display a fallback UI
>Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead.
### - *Do we need to call addEventListener to add listeners to DOM?*
No, we should just provide a listener when the element is initially rendered.
### - *What give us the use of Refs?*
Refs provide a way to access DOM nodes or React elements created in the render method.
Ref updates happen before componentDidMount or componentDidUpdate lifecycle hooks.
### - *When to use refs?*
1. Managing focus, text selection, or media playback.
2. Triggering imperative animations.
3. Integrating with third-party DOM libraries.
>Avoid using refs for anything that can be done declaratively.
### - *What give us the use of Context?*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
### - *When to use Context?*
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language

### - *What are alternatives for binding methods in the constructor?
Class fields syntax
```javascript
    handleClick = () => {
    ...
    }
```
Arrow function. If this callback is passed as a prop to lower components, those components might do an extra re-rendering. 
```javascript
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
```
      
### - *What are the main differences in syntax between ES5 and ES6?*
Require vs Import
```javascript
// ES5
var React = require('react');
// ES6
import React from 'react';
```
Exports vs Export
```javascript
// ES5
module.exports = Component;
// ES6
export default Component;
```
Component and function
```javascript
// ES5
var MyComponent = React.createClass({
    render: function() {
        return <h3>Hello Edureka!</h3>;
    }
});
// ES6
class MyComponent extends React.Component {
    render() {
        return <h3>Hello Edureka!</h3>;
    }
}
```
Props
```javascript
// ES5
var App = React.createClass({
    propTypes: { name: React.PropTypes.string },
    render: function() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
});
// ES6
class App extends React.Component {
    render() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
}
```
State
```javascript
// ES5
var App = React.createClass({
    getInitialState: function() {
        return { name: 'world' };
    },
    render: function() {
        return <h3>Hello, {this.state.name}!</h3>;
    }
});
// ES6
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return <h3>Hello, {this.state.name}!</h3>;
    }
}
```
