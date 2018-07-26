<template>
    <div>
        <input type="button" class="btn btn-primary" value="Login"
                data-toggle="modal" data-target="#modalLogin" data-backdrop="false">
        <div class="modal" id="modalLogin" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <fieldset>
                            <legend><h3>Registrarse</h3></legend>
                            <p>Nombre de usuario:</p>
                            <input type="text" v-model="username">
                            <p>{{username}}</p>
                            <p>E-mail:</p>
                            <input type="email" name="email">
                            <p>Contraseña</p>
                            <input type="password" name="password"><br/>
                            <input type="button" value="Registrarse">
                            <a href=""><p>Ya tengo una cuenta en Pokemarkt</p></a>
                        </fieldset>

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
            password:""
        }
    },    
    methods: {
        validateData() {
            
        }
    },
    watch:{
        
    }
}
</script>

<style>
    #login{
        background-color:burlywood
    }
</style>

