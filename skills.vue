<template>
    <div id="skills">
        <h2>{{ msg3 }}</h2>

        <ul>
            
            <li><h4>HTML</h4></li><br>
            <li><h4>CSS</h4></li><br>
            <li><h4>JavaScript</h4></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data () {
        return {
            msg3: 'This is the Skills Component'
        }
    }
}
</script>
