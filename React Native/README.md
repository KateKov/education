## **REACT NATIVE**

### -   *What is difference between React and React Native?*
ReactJs is a JavaScript Library used for developing apps in HTML5 using JavaScript as the developing language. It knows how a component should behave. 
React Native is used to develop native mobile apps using JavaScript as the development language. It knows how to take the output from a component and place it on the screen.

### -   *Is React Native a native Mobile App?*
Yes, React Native Compiles a native mobile app using native app components.

### -   *What is advantages of using react-native instead of native language?*
1. Platform independent.
2. Reusable Components.
3. React-Native compatible with third party plugin, uses less memory, hot reloading, and smoother experience.
4. Learn once, write anywhere.
5. More predictable coding.
6. Declarative style.

### -   *How Virtual DOM works in React Native?*
React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser’s displayed DOM efficiently. This allows developers to write code as if the entire page is rendered on each change while the React libraries only render subcomponents that actually change.

### - *How to add style?*
By using the style property to add the styles inline and by using the Stylesheet for styling (preferred) 
### - *Why we should use flexbox?*
To achieve the desired layout. 
Flexbox offers three main properties − flexDirection justifyContent and alignItems.
```javascript
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const Home = (props) ⇒ {
   return (
      <View style = {styles.container}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
      </View>
   )
}
export default Home

const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      height: 600
   },
   redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black'
   },
})
```
### - *How to create a list in React Native?*
By using List Views.
ListView - A core component designed for efficient display of vertically scrolling lists of changing data. The minimal API is to create a `ListView.DataSource`, populate it with a simple array of data blobs, and instantiate a ListView component with that data source and a `renderRow` callback which takes a blob from the data array and returns a renderable component.
To create a list, we can use the `map()` method. This will iterate over an array of items, and render each one.
### - *How we can handle text input?*
By using TextInput. It is a basic component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.
###  - *How we can add the scroll?*
By using SrolllView. It is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).
### - *What we can use for networking?*
1. `Fetch Api`. It provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
POST request:
```javascript
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
```
2. `XMLHttpRequest API `. We can use third party libraries such as `frisbee` or `axios` that depend on it, or we can use the XMLHttpRequest API directly if we prefer.
3. `WebSocket`. It is a protocol which provides full-duplex communication channels over a single TCP connection.
> componentDidMount() good place to instantiate the network request.
### - *How we can use image?*
```javascript
<Image source={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}} />
```
### - *How we can render web content in a native view?*
By using WebView.
```javacript
import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}
```
