<template>
  <div id="app">
    <app-header v-on:titleChanged='updateTitle ($event)'
    v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
    <router-view/>
  </div>
</template>

<script>
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  data () {
    return {
      users: [
        {name: 'yifei'},
        {name: 'henry'}
      ],
      title: 'send a value (numbers,string,boolean)'
    }
  },
  methods: {
    updateTitle (tit) {
      this.title = tit
      // tit = 'child send data to parent'
    }
  },
  components: {
    'users': Users,
    'app-header': Header,
    'app-footer': Footer
  }
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
