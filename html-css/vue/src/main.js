// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Users from './components/Users'

Vue.config.productionTip = false

// global register component
// Vue.component('users', Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // or template：'<div></div>'
  template: '<App/>',
  components: { App }
})

// main.js and index.html have direct relationship
// index.html->main.js->App.vue

// scaffold is through the webpack to set up development environment
// use es6, vue loader can compile es6 to es5
// webpack and compress js to a file
// Project files are compiled in a scaffold environment instead of a browser
// Automatically refresh the page 
// Need to run scaffold in node environment
//in build folder we can change client server port