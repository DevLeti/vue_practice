<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Todo List!</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app{
    font-family : sans-serif;
}
h1 {
    text-align : center;
    font-weight : bold;
}
</style>
