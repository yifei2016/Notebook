<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <!-- a tag will reload page, it is slower //a href must be same with route defined before -->
      <li><a href="/helloworld">Hello</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users: []
      }
    },
    created() {
      this.$http.get(url).then((data) => this.users = data.body)
    }
  }
</script>

