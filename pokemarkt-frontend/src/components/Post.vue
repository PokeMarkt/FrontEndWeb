<template>
    <div class="card container postPokemon" v-bind:style="bgc">
        <div class="card-img-top">
            <img :src="srcImg">
        </div>
        <div class="card-body"> 
            <p class="card-title">Pikachu {{ post.nPok }}</p>
            <p class="">PC: 567</p>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.initImg()
        this.initPost()
    },
    data(){
        return{
            bgc:{backgroundColor:"white"},
            srcImg:"../../static/pokemonImages/"
        }
    },
    props:{
        post:{
            type: Object
        }
    },
    methods:{
        initImg(){
            var n = ""
        if(this.post.nPok<10){
            n = "00" + this.post.nPok.toString() + ".jpg"
        }else if(this.post.nPok<100){
            n = "0" + this.post.nPok.toString() + ".jpg"
        }else{
            n = this.post.nPok.toString() + ".jpg"
        }
        this.srcImg = this.srcImg + n
        },
        initPost(){
            if(this.post.shiny)
                this.bgc.backgroundColor="yellow";
        }
    }
}

</script>

<style>

.postPokemon {
    width: 230px;
}

</style>
