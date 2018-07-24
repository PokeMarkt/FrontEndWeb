<template>
    <div id="postCont">
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
            posts:[{nPok:382},{nPok:299},{nPok:350},{nPok:259},{nPok:235},{nPok:55},{nPok:59}]
        }
    }
}
</script>

<style>
#postCont{
    background-color: rgb(243, 242, 187);
    width: 75%;
    margin: auto;
}
</style>
