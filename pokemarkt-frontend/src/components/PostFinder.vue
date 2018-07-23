<template>
    <div>
        <form action="">
            <fieldset>
                <div>
                    <input type="text" v-model="pokemon_name" v-on:keyup="filtrarPokemons" autofocus>
                    <input type="button" value="Buscar" v-on:click="comprovarValor">
                    <input type="button" value="Más filtros" v-on:click="mostrarFiltros" data-toggle="modal" data-target="#modalFiltros">
                </div>

                <div class="modal fade" id="modalFiltros" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div id="divFiltros">
                                <span>Nº Pokedex: (1 - 386)</span><input type="number" v-model="pokemon_numPokedex" min="1" max="386">
                                <div><input type="checkbox" v-model="pokemon_shiny" value="shiny_true">Variocolor</div>
                                <div><input type="checkbox" v-model="pokemon_alola" value="alola_true">Alola</div>
                                <div><input type="checkbox" v-model="pokemon_event" value="event_true">De Evento</div>
                                <div><span>Distancia maxima: 1Km </span>
                                <input type="range" min="1" max="500" v-model="distKm"><span>500Km {{ distKm }}Km</span></div>
                                <div><span>PC minimo: 0 </span>
                                <input type="range" min="0" max="4000" v-model="pokemon_pc" step="100"><span>4000 o + {{ pokemon_pc }}</span></div>
                                <span>Precio: </span><input type="number" v-model="price" min="0" max="2500" style="width:50px;">
                                <input type="checkbox" v-model="free"><span>Gratis</span><br/>
                                <span>0€ </span><input id="rangePrice" type="range" min="0" max="2500" value="0" v-model="price"><span>2500€ +</span><br/><br/>
                                <div>Nº Pokedex: (1 - 386)<input type="number" v-model="numToAdd" min="1" max="386">
                                <button v-on:click="addPokToList">Añadir</button><br/></div>
                                <template v-for="pokem in pokeOffer">
                                <span v-bind:key="pokem"><img v-bind:id="pokeOffer.indexOf(pokem)" v-bind:src="pokem" v-on:click="subsFromList"
                                    style="width:50px;height:50px;"></span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pokemon_name:"",
            pokemon_numPokedex:"",
            pokemon_shiny:false,
            pokemon_alola:false,
            pokemon_event:false,
            pokemon_type:[],
            pokemon_pc:0,
            distKm:30,
            price:0,
            free:false,
            numToAdd:1,
            pokeOffer:[],
            pokeOfferNum:[],
            //img_void:"http://pokemonbattlego.com/wp-content/uploads/2017/11/icono-pokeball.png",
            srcImg:"../../static/pokemonImages/",
            filtros:false,
        }

    },

    watch:{
        free(){
            document.getElementById("rangePrice").disabled = this.free
            if(this.free)
                this.price=0
        }
    },
    methods:{
        addPokToList(){
            if(this.numToAdd > 0 && this.numToAdd < 387){
                var alreadyAdded = false
                if(this.pokeOfferNum.length<10){
                    this.pokeOfferNum.forEach(element => {
                        if(element == this.numToAdd)
                        alreadyAdded=true
                    });
                    if(!alreadyAdded){
                        this.pokeOfferNum.push(this.numToAdd)
                        var n = ""
                        if(this.numToAdd<10){
                            n = "00" + this.numToAdd.toString() + ".jpg"
                        }else if(this.numToAdd<100){
                            n = "0" + this.numToAdd.toString() + ".jpg"
                        }else{
                            n = this.numToAdd.toString() + ".jpg"
                        }
                        n = this.srcImg + n
                        
                        this.pokeOffer.push(n)
                    }
                }
            }
        },
        subsFromList(elem){
            this.pokeOffer.splice(elem.target.id,1)
            this.pokeOfferNum.splice(elem.target.id,1) 
        },
        comprovarValor(){
            alert("Nombre: " + this.pokemon_name)
            alert("Num Pokedex: " + this.pokemon_numPokedex)
            alert("Shiny: " + this.pokemon_shiny)
            alert("Alola: " + this.pokemon_alola)
            alert("De evento: " + this.pokemon_event)
            alert("PC: " + this.pokemon_pc)
            alert("Max distancia: " + this.distKm)
            alert("Euros: " + this.price)
            alert("Gratis: " + this.free)
            alert("numspoke: " + this.pokeOfferNum)
        },

        filtrarPokemons(texto){
            /*var txtInput = texto.target.value
            var resList = []
            array.forEach(element => {
                if(element.indexOf(txtInput) != -1)
                    resList.push(element)
            });
            */
        },
        mostrarFiltros(){
            this.filtros = !this.filtros
        }
    }
}
</script>


<style>

</style>
