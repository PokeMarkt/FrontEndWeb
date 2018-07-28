<template>
    <div id="profileDD">
        <Login v-if="!logged"/>
        <div v-else>
            <div class="btn-group">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Perfil</button>

                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Perfil</a>
                    <a class="dropdown-item" href="#">Configuración</a>
                    <a class="dropdown-item" href="#">Ayuda</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Salir</a>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import Login from './Login.vue'
export default {
    data(){
        return{
            logged:false
        }
        
    },
    components: {
        Login
    }
}
</script>

<style>
#profileDD{
    height: 50px;
    width: 130px;
}
</style>
