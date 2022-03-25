<template>
    <div id="profile">
        <h2>{{ msg1 }}</h2>

        <ul>
            <br>
            <li><h4>Objective:</h4></li><br>
            <li><h4>Name: Angelo L. Cometa</h4></li><br>
            <li><h4>Course: Information Technology with Specialization in Web Development</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'profile',
    data () {
        return {
            msg1: 'This is the Profile Component'
        }
    }
}
</script>