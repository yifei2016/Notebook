
<template>
  <div id="app">
    <router-view/>
    <!-- <HelloWorld/> -->
    <!-- <users></users> -->
    <!-- template: html structure -->
    <!-- behavior: logic -->
  </div>
</template>


<script>
// local render component
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'app'
  //register component
  // components: {
    // ='helloworld': HelloWorld
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
