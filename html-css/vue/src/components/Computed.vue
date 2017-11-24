<template>
  <div>
    <h1>computed</h1>
    <button v-on:click="a++">Add to A</button>
    <button v-on:click="b++">Add to B</button>
    <p>A - {{a}}</p>
    <p>B - {{b}}</p>
    <!-- <p>Age + A = {{addToA()}}</p>
    <p>Age + A = {{addToB()}}</p> -->

    <!-- generally we can use methods, computed attributes are used when searching heavily, computed will reduce project expenditure and optimize project,  addToA不用括号-->
    <p>Age + A = {{addToA}}</p>
    <p>Age + A = {{addToB}}</p>

    <!-- bind css style -->
    <h1>dynamic css class</h1>
    <!-- not dynamic -->
    <!-- <h2 v-bind:class="{red: true,blue:false}">example 1</h2> -->

    <!-- dynamic -->
    <div v-on:click="changeColor = !changeColor" v-bind:class="{changeColor:changeColor}">
      <span>Henry</span>
    </div>

    <h2 class="changeColor">example 2</h2>
    <button v-on:click="changeColor = !changeColor">change color</button>
    <button v-on:click="changeLength = !changeLength">change length</button>
     <div v-bind:class="compClass">
       <span>Jerry</span>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'Computed',
    data() {
      return {
        a: 0,
        b: 0,
        age: 20,
        changeColor: false,
        changeLength: false
      }
    },
    // Consume energy, trigger one of methods, two methods will load
    methods: {
      // addToA: function() {
      //   console.log('a')
      //   return this.a + this.age;
      // },
      // addToB: function() {
      //   console.log('b')
      //   return this.b + this.age;
      // }
    },
    computed: {
      addToA: function() {
        console.log('a')
        return this.a + this.age;
      },
      addToB: function() {
        console.log('b')
        return this.b + this.age;
      },
      compClass: function(){
        return {
          changeColor: this.changeColor,
          changeLength: this.changeLength
        }
      }
    }
  }
</script>


<style scoped>
  span{
    background: red;
    display: inline-block;
    padding: 10px;
    color: #fff;
    margin: 10px 0;
  }
  .changeColor span{
    background: green;
  }
  .changeLength span:after{
    content: "length";
    margin-left: 10px;
  }
</style>