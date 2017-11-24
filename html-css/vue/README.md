# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

jsonplaceholder.typicode.com to make fake http
vue resource to make http request
npm install vue-resource --save
go to main.js import VueResource from 'vue-resource'
Vue.use(VueResource)

Get the data before rendering the page load, this is hook function

created(){
  this.$http.get(url).then((data)=>this.users=data.body)

https://oceanwu.ke.qq.com vueX = redux