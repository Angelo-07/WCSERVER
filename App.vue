<template>
  <div id="app">
    <div class="alert alert-warning" role="alert">
      <img src="./assets/gelo.png">
      <h1>{{ msg }}</h1>
    </div> 
      <profile></profile> <br>
      <education></education> <br>
      <skills></skills>

  </div>
</template>

<script>
  import profile from './component/profile.vue'
  import education from './component/education.vue'
  import skills from './component/skills.vue'

export default {
  components: {
    profile,
    education,
    skills
    
  },
  name: 'app',
  data () {
    return {
      msg: ' '
  }
}
}
</script>

<style>

img {
  width: 400px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5a2f4f;
  margin-top: 60px;
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
  font-size: 1.2em;
}

a {
  color: #42b983;
}

</style>