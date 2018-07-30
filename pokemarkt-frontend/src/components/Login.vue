<template>
    <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalLogin" 
                data-backdrop="false">Login</button>
        <div class="modal" id="modalLogin" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content animate">
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
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
}
</style>

