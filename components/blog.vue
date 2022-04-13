<template>
    <div class="blog">
        <div class="container">
          <h1>{{title}}</h1>
          <h5>{{divider1}}</h5>
          <br>
          <h5>{{Ach1}}</h5>
          <h7>{{Achi1}}</h7>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{Ach2}}</h5>
          <h7>{{Achi2}}</h7>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{Ach3}}</h5>
          <h7>{{Achi3}}</h7>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{Ach4}}</h5>
          <h7>{{Achi4}}</h7>
          <br>
          <br>
          
    </div>
    </div> 
</template> 
<script> 
    export default { 
            name: 'Blog', 
            data () { 
                return{ 
                    title: 'My Achievements',
                    Ach1: 'With Honors (2018)',
                    Ach2: 'With Honors(2020)',
                    Ach3: 'Dean Lists (2020-2021)',
                    Ach4: 'Dean Lists (2021)',
                   
                    Achi1: 'Awarded With Honors back in Junior High School',
                    Achi2: 'Awarded With Honors in Grade 12 (2nd semester) ',
                    Achi3: 'Awarded as Deans Lister 1st year college for the 1st and 2nd Semester ',
                    Achi4: 'Awarded as Deans Lister 2nd year college for the 2st semester ',
                    
                    divider: '----------------------------------------------------------------',
                    divider1: '<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>'
                }
            }
    }
</script>

<style>
</style>