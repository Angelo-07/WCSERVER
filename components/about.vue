<template>
  <div class="About">
    <title>{{title}}</title>
    <h1>{{ msg }}</h1>
    <div class="container">
          <h1>Educational Background</h1>
          <h5>{{divider1}}</h5>
          <br>
          <h5>{{prim}}</h5>
          <h6>{{school1}}</h6>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{sec}}</h5>
          <h6>{{school2}}</h6>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{secon}}</h5>
          <h6>{{school3}}</h6>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{cllge}}</h5>
          <h6>{{school3}}</h6>
          <h6>{{crse}}</h6>
         
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'about',
      school1: 'Porac Elementary School',
      school2: 'Porac National High School',
      school3: 'Holy Angel University',
      prim: 'Primary Education',
      sec: 'Junior Highschool (Grade 7- 10)',
      secon: 'Senior Highschool (Grade 11-12)',
      cllge: 'Tertiary Education (College)',
      crse: 'BSIT - Website Development',
     
     divider: '-----------------------------------------------',
     divider1: '<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>'
    }
  }
}
</script>


<style scoped>
</style>