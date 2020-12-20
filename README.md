### Redux Crash Course With React: https://www.youtube.com/watch?v=93p3LxR9xfM&t=481s

### Main Points

* Install necessary packages `npm install redux react-redux redux-thunk`
* wrap the main `App` with [Provider](https://github.com/khiet/redux-crash-course/blob/master/src/App.js#L14) and set [store](https://github.com/khiet/redux-crash-course/blob/master/src/store.js#L11) (`createStore(reducer, [preloadedState], [enhancer]`)
* create a [reducer](https://github.com/khiet/redux-crash-course/blob/master/src/reducers/postReducer.js#L1) which gets combined into the root reducer using [combineReducers](https://github.com/khiet/redux-crash-course/blob/master/src/reducers/index.js#L4), a reducer is a pure function that takes an action and returns a new state
* [action types](https://github.com/khiet/redux-crash-course/blob/master/src/actions/types.js) define all action types that reducers reduce on and action creators create
* [action creators](https://github.com/khiet/redux-crash-course/blob/master/src/actions/postActions.js) define actions (`{ type: AN_ACTION_TYPE, payload: ... }`) to be dispatched to the reducer
* use [connect](https://github.com/khiet/redux-crash-course/blob/master/src/components/Posts.js#L52) to connect a component to the store
* use connected [state](https://github.com/khiet/redux-crash-course/blob/master/src/components/Posts.js#L19) and [dispatch](https://github.com/khiet/redux-crash-course/blob/master/src/components/Posts.js#L8)

<h3 align="center">
  Redux Data Flow
  <br />
  <br />
  <p align="center">
    <img width="600" height="300" src="https://raw.githubusercontent.com/khiet/redux-crash-course/master/public/redux-data-flow.jpg">
  </p>
</h3>
