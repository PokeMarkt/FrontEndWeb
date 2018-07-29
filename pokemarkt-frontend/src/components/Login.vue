<template>
    <div>
        <button type="button" class="btn btn-primary" 
                data-toggle="modal" data-target="#modalLogin" data-backdrop="false">Login</button>
        <div class="modal" id="modalLogin" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <div class="tab">
                            <button class="button" v-on:click="switchTab('reg')">Registrarse</button>
                            <button class="button" v-on:click="switchTab('login')">Iniciar Sesión</button>
                        </div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <div id="registerTab" v-if="tab">
                            <fieldset>
                                <legend><h3>Registrarse</h3></legend>
                                <p>Nombre de usuario:</p>
                                <input type="text" v-model="username">
                                <p>E-mail:</p>
                                <input type="email" v-model="email">
                                <p>Contraseña</p>
                                <input type="password" v-model="password"><br/>
                                <input type="button" value="Registrarse">
                                <a href=""><p>Ya tengo una cuenta en Pokemarkt</p></a>
                            </fieldset>
                        </div>
                        <div id="loginTab" v-else>
                            <fieldset>
                                <legend><h3>Iniciar sesión</h3></legend>
                                <p>Nombre de usuario o email:</p>
                                <input type="text" v-model="username">
                                <p>Contraseña</p>
                                <input type="password" v-model="password"><br/>
                                <input type="button" v-on:click="validateData" value="Iniciar sesión">
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            email:"",
            password:"",
            tab:false
        }
    },    
    methods: {
        validateData() {
            
        },
        switchTab(t){
            if(t=='reg')
                this.tab = true
            else
                this.tab = false
        }
    },
    watch:{
        
    }
}
</script>

<style>

</style>

