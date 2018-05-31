## **REDUX**

### -   *What is Redux?*
It is a JS library, that helps us organize data in a single page web app. 
According to the Web Site, Redux is a predictable state container for JavaScript applications.

### -   *Why I should use Redux?*
1. `Predictability of outcome` – Since there is always one source of truth, i.e. the store, there is no confusion about how to sync the current state with actions and other parts of the application.
2. `Maintainability` – The code becomes easier to maintain with a predictable outcome and strict structure.
3. `Server side rendering` – You just need to pass the store created on the server, to the client side. This is very useful for initial render and provides a better user experience as it optimizes the application performance.
4. `Developer tools` – From actions to state changes, developers can track everything going on in the application in real time.
5. `Community and ecosystem` – Redux has a huge community behind it which makes it even more captivating to use. A large community of talented individuals contribute to the betterment of the library and develop various applications with it.
6. `Ease of testing` – Redux’s code is mostly functions which are small, pure and isolated. This makes the code testable and independent.
7. `Organization` – Redux is precise about how code should be organized, this makes the code more consistent and easier when a team works with it.

### -   *What are principles of Redux?*
1. `Single source of truth`: The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
2. `State is read-only`: The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
3. `Changes are made with pure functions`: In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depend solely on the values of their arguments.

### -   *What are components of Redux?*
1. `Action` (an object that describes what happened)
2. `Reducer` (a place to determine how the state will change)
3. `Store` (state/ object tree of the entire application is saved in the Store)
4. `View` – (simply displays the data provided by the Store)

### - *What are actions in Redux?*
Actions are events. Actions send data from the application (user interactions, internal events such as API calls, and form submissions) to the store. The store gets information only from actions. Internal actions are simple JavaScript objects that have a type property (usually constant), describing the type of action and payload of information being sent to the store.
```javascript
const ADD_TODO = 'ADD_TODO'
```
```javascript
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```
Actions are created with action creators. They are just functions that return actions.
```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```
### - *What are reducers in Redux?*
Reducers are functions (pure) that take the current state of the application and an action and then return a new state.
Every reducer is responsible for its own part of the app's state, and the state parameter is different for every reducer. 
If an object (state) changes only some values, Redux creates a new object, the values that didn’t change will refer to the old object and only new values will be created. The combineReducers() combines all of the reducers in the app into a single index reducer.
```javascript
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}
```
### - *What is Store in Redux?*
Store is the object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners. The entire state is represented by a single store. Any action returns a new state via reducers. 
The store has the following responsibilities:
1. Holds application state;
2. Allows access to state via getState();
3. Allows state to be updated via dispatch(action);
4. Registers listeners via subscribe(listener);
5. Handles unregistering of listeners via the function returned by subscribe(listener).
```javascript
import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)
```
We may optionally specify the initial state as the second argument to createStore()
### - *How is state changed in Redux?*
The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.
### - *What is Data Flow in Redux?*
The data lifecycle in any Redux app follows these 4 steps:
1. Calling store.dispatch(action).
2. The Redux store calls the reducer function we gave it.
3. The root reducer may combine the output of multiple reducers into a single state tree.
4. The Redux store saves the complete state tree returned by the root reducer.

### - *What is Middleware?*
In a nutshell, middleware is a convenient way that frameworks allow us to inject your own code when certain events happen.  It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. It can be used for loging and for async actions.
