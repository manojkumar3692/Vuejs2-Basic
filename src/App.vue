<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './component/Search.vue';
export default {
  name: 'app',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss"> 
#app {
  font-family: 'Raleway', sans-serif;  
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
