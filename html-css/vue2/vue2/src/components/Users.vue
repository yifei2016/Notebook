<template>
  <div id="app">
    <ul>
      <li v-for="character in characters" v-bind:key="character"> {{character}} </li>
      <li v-for="(user, index) in users" v-bind:key="user"> {{index+1}}.{{user.name}} - {{user.age}}</li>
    </ul>
    <template v-for="(user, index) in users">
      <h3>{{index}}.{{user.name}}</h3> 
      <p>Age - {{user.age}}</p>
    </template>
    <template v-for="(user, index) in users">
      <div v-for="(val,key) in user">
        <p>{{key}} - {{val}}</p>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        characters: ['mario', 'luffy', 'yoshi'],
        users: [
          {
            name: 'yifei'
          },
          {
            age: 27
          }
        ]
      }
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
