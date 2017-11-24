<template>
  <footer class="app-footer">
    <h1>{{title1}} {{title}}</h1>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        title1: 'Vue footer '
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>












