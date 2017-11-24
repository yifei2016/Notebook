<template>
  <div>
    //props is users, send props to users comp
    <users v-bind:users="users"></users>
  </div>
</template>

The parent component sends a value of prop to the child

<script>
  export default {
    data() {
      return {
        users: [
          {
            name: 'yifei'
          },
          {
            name: 'henry'
          }
        ]
      }
    }
  }
</script>

<template>
  
</template>

<script>
  export default {
    name: 'users',
    //1:
    props: ["users"],
    //2:
    props: {
      users: {
        type: Array,
        //formal array
        required: true
      },
      //another props list
      list: {
  
      }
    }
  }
</script>
