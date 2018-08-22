### Redux Crash Course With React: https://www.youtube.com/watch?v=93p3LxR9xfM&t=481s

### Main Points

* Install necessary packages `npm install redux react-redux redux-thunk`
* add [Provider to the main app](https://github.com/khiet/redux-crash-course/blob/master/src/App.js#L14) and set [store](https://github.com/khiet/redux-crash-course/blob/master/src/store.js#L11)
* add [root reducer](https://github.com/khiet/redux-crash-course/blob/master/src/reducers/index.js#L1) and [reducer](https://github.com/khiet/redux-crash-course/blob/master/src/reducers/postReducer.js#L1)
* [connect components with actions and reducers](https://github.com/khiet/redux-crash-course/blob/master/src/components/Posts.js#L52)
* use shared [state](https://github.com/khiet/redux-crash-course/blob/master/src/components/Posts.js#L19) and [action](https://github.com/khiet/redux-crash-course/blob/master/src/components/Posts.js#L8)

<h3 align="center">
  Redux Data Flow
  <br />
  <br />
  <p align="center">
    <img width="600" height="300" src="https://raw.githubusercontent.com/khiet/redux-crash-course/master/public/redux-data-flow.jpg">
  </p>
</h3>
