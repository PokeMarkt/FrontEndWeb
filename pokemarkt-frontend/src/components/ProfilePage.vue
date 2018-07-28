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
        <div>
            <div id="profileInfo" class="container-fluid">
                <img id="mainProImg" src="../assets/logo.png">
                <p>NombrePerfil</p>
                <p>#3494621</p>
                <p>email@email.com</p>
                <input type="text" value="Descripción..." style="width: 200px; height: 80px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#profileInfo{

    width: 700px;
    background-color: white;
    margin: auto;
}

#ProfilePage{
    margin: auto;

}

aside{
    width:250px;
}

</style>
