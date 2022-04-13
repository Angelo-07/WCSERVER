<template>
  <div class="Gallery">
    <title>{{title}}</title>
    <div class="container">
      
          <h1>Kulay Rosas ang Bukas</h1>
          <h5>Manalakaran para kang Leni-Kiko</h5>
          <h5>{{divider1}}</h5>
          <br><br>
          <img src="../assets/kulay.jpg">
          <br><br>
          <img src="../assets/rosas.jpg">
          <br><br>
          <img src="../assets/ang.jpg">
          <br><br>
          <img src="../assets/bukas.jpg">

          
         
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
     divider: '-----------------------------------------------',
     divider1: '<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>'
    }
  }
}
</script>


<style scoped>
</style>