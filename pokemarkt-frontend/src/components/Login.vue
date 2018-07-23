<template>
    <div id="login">
        <form method="post">
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
        </form>
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
        username(){
            alert("ha pasao algo")
        }
    }
}
</script>

<style>
    #login{
        background-color:burlywood
    }
</style>

