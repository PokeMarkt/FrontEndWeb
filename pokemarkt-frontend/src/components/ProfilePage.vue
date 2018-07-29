<template>
    <div id="profilePage">
        <aside>
            <div class="sidenav list-group">
                <a href="#" class="list-group-item list-group-item-action">Chats</a>
                <a href="#" class="list-group-item list-group-item-action">Mis Ofertas</a>
                <a href="#" class="list-group-item list-group-item-action">Crear Oferta</a>
                <a href="#" class="list-group-item list-group-item-action">Historial</a>
                <a href="#" class="list-group-item list-group-item-action">configuración</a>
            </div>
        </aside>
        <div id="mainCont" class="flex-container">
            <div id="profileInfo">
                <img id="mainProImg" src="../assets/logo.png">
                <p>NombrePerfil</p>
                <p>#3494621</p>
                <p>email@email.com</p>
                <input type="text" value="Descripción..." style="width: 200px; height: 80px;">
            </div>
            <h3>Pokemon que busco</h3>
            <div class="flex-container fx-row">
                <template v-for="p in posts">
                    <post v-bind:key="p" class="d-inline-block mx-2 my-2" :post="p"/>
                </template>
            </div>
            <h3>Mis ofertas</h3>
            <div id="misOfertas" class="flex-container fx-row">
                <template v-for="p in posts">
                    <post v-bind:key="p" class="d-inline-block mx-2 my-2" :post="p"/>
                </template>
            </div>
        </div>
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
            posts:[{nPok:251,shiny:false},{nPok:361,shiny:true},{nPok:244,shiny:false}]
        }
    }
}
</script>

<style>
#profileInfo{
    width: 700px;
    background-color: white;
}

#ProfilePage{
    margin: auto;
}

#mainCont{
    padding-left:50px;
}

.flex-container{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.fx-row{
    flex-direction: row;
}

.wanted{
    width: 300px;
    height: 300px;
    background-color: rgb(29, 85, 80);
    margin: 1px;
}

aside{
    float: left;
    width:250px;

}

</style>
