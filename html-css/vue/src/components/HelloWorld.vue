<template>
  <div class="hello">
    <h1>{{ website }}</h1>
    <a v-bind:href="website">web</a>
    <input type="text" v-bind:value="name">
    <p v-html="websiteTag"></p>
    <h1>events</h1>
    <!-- <button v-on:click="age++">add one age</button> -->
    <button v-on:click="add(1)">add one</button> in this case,  have () or not is same
    <!-- <button @click="add(1)">add one</button>   is equal to above-->
    <!-- <p>{{add()}}</p>  in this case,  must have() to call func-->
    <button v-on:click="subtract(1)">subtract one</button>
    <button v-on:click.once="subtract(1)">subtract once</button>
    <!-- double click -->
    <button v-on:dblclick="add(10)">add ten</button>
    <button v-on:dblclick="subtract(10)">subtract ten</button>
    <p>my age is {{age}}</p>
    <a href="http://www.baidu.com" v-on:click.prevent='alert()'>baidu</a>
  
    <div id="canvas" v-on:mousemove="updateXY">{{x}}, {{y}} -
      <!-- <span v-on:mousemove="stopMoving">Stop moving</span> -->
      <span v-on:mousemove.stop="func">Stop moving</span>
    </div>
  
    <!-- ========== -->
    <h1>events</h1>
    <label for="">name:</label>
    <input type="text" v-on:keyup="logname">
    <span>{{name}}</span>
    <label for="">age:</label>
    <input type="text" v-on:keyup.enter="logname">
  
    <!-- double binding 1-->
    <label for="">gender:</label>
    <input ref="genderValue" type="text" v-on:keyup="writegender">
    <span>{{gender}}</span>
    <label for="">age2:</label>
    <input  type="text" v-model="age">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        website: 'http://www.baidu.com',
        name: 'yifei',
        // age: 27,
        age: '',
        gender: '',
        x: 0,
        y: 0,
        websiteTag: "<a href='http://www.baidu.com'>the newstep</a>"
      }
    },
    methods: {
      add: function(inc) {
        this.age += inc;
      },
      subtract: function(dec) {
        this.age -= dec;
      },
      updateXY: function(event) {
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      stopMoving: function(event) {
        event.stopPropagation();
      },
      alert: function() {
        alert('stop')
      },
      logname: function() {
        console.log('you are typing')
      },
      //  double binding
      writegender: function(){
        // double binding 1
        this.gender = this.$refs.genderValue.value;
        // double binding 2
        // v-model
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }
  
  #canvas {
    text-align: center;
    width: 100px;
    height: 100px;
    border: 1px solid pink;
  }
</style>
data: used to save data
  