<template>
    <div id="postCont" class="flex-container">
        <template v-for="p in posts">
            <post v-bind:key="p" class="d-inline-block mx-2 my-2" :post="p"/>
        </template>
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    components:{
        Post
    },
    data(){
        return{
            posts:[{nPok:382,shiny:false},{nPok:219,shiny:true},{nPok:350,shiny:false},{nPok:259,shiny:true},{nPok:235,shiny:false},{nPok:55,shiny:false},{nPok:59,shiny:false},{nPok:368,shiny:false},{nPok:277,shiny:false},{nPok:386,shiny:true},{nPok:299,shiny:true},{nPok:330,shiny:false},{nPok:288,shiny:true}]
        }
    }
}
</script>

<style>
.flex-container{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

#postCont{
    width: 75%;
    margin: auto;
    margin-top: 62px;
}
</style>
