<template>
  <div id="app">
   
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  margin-left: 5px;
  margin-right: px;
  padding: 0;
  background: url(./assets/bGround.jpg) no-repeat;
  background-size: cover;
  text-decoration: none;
  vertical-align: baseline;
}
/**********Home.vue**********/
.container {
  width: 650px;
  background: rgb(224, 198, 198);
  padding: 40px;
  text-align: center;
  margin-top: 4%;
  color: rgb(24, 21, 21);
  font-family: Arial, Helvetica, sans-serif;
}
.container img {
  width: 500px;
  height:300px;
}
.container h1 {
  font-size: 40px;
  letter-spacing: 4px;
  font-weight: 50;
  font-family:fantasy;
}
.container h5 {
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.container p {
  text-align: justify;
}
</style>