<template>
  <div class="app-header" v-on:click="changeTitle">
    <h1>{{title1}} {{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        title1: 'Vue header '
      }
    },
    methods: {
      changeTitle: function () {
        // this.title = "changed"
        this.$emit('titleChanged', 'child send data to parent')
      }
    },
    beforeCreate: function () {
      console.log('before component instantiate, we render this func ')
    },
    created: function () {
      alert('after component instantiate, but page have not be shown')
    },
    beforeMount: function () {
      console.log('before component mount, page have not be shown, virtual dom have already configed')
    },
    mounted: function () {
      alert('after component mount, after this func, page will be shown')
    },
    beforeUpdata: function () {
      alert('before component update, page have not updated, but virtual dom have configed')
    },
    updated: function () {
      alert('component update, after this function, page will be shown')
    },
    beforeDestroy: function () {
      alert('before component destroy ')
    },
    destroyed: function () {
      alert('component destroyed')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>












