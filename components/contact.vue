<template>
  <div class="Contact">
    <div class="container">
          <h1>{{title}}</h1>
          <h5>{{divider1}}</h5>
          <br>
          
          <h5>Email:</h5>
          <h6>{{email}}</h6>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>Phone Number</h5>
          <h6>{{phonenum}}</h6>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>Facebook</h5>
          <h6>{{fbook}}</h6>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>Person to contact in case of emergency</h5>
          <h6>{{phoneEmer}}</h6>
         
        </div>  
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact Information',
      email: 'acometa07@gmail.com',
      phonenum: '+639 566852715',
      fbook: 'Angelo Cometa',
      phoneEmer: 'Jocelyn Cometa ( +639 216 170 821 )',
      divider: '----------------------------------------------',
      divider1: '<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>'
    }
  }
}
</script>


<style>
</style>