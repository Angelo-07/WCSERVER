<template>
  <div class="Home">
    <title>{{title}}</title>
    
    <div class="container">
          <h1>Angelo Lasquite Cometa</h1>
          <h5>2nd Year Student (BSIT - Website Development)</h5>
          <br>
          <p>{{p}} <br> <br> {{p2}}</p>
          <br>
          <br>
          
        </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
      
      p: ' Currently a second year college student at the Holy Angel University, taking up Bachelor of Science in Information Technology with are of Specialization in Website Development. ',
    }
    
  }
}
</script>


<style scoped>
</style>