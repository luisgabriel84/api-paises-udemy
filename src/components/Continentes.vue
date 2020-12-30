<template>
<div class="text-center mb-3">
    <h3 >Filtrar por continente</h3>

    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" @click="filtro('Americas')">AM</button>
        <button type="button" class="btn btn-secondary" @click="filtro('Europe')">EU</button>
        <button type="button" class="btn btn-secondary" @click="filtro('Asia')">AS</button>
        <button type="button" class="btn btn-secondary" @click="filtro('Oceania')">OC</button>
        <button type="button" class="btn btn-secondary"  @click="filtro('Africa')">AF</button>
        <button type="button" class="btn btn-secondary" @click="filtro('')">ALL</button>
    </div>
    
</div>

</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()

        const filtro = (region) =>{
           store.dispatch('filtrarRegion',region)
        }
        return { filtro };
    }
}
</script>

<style>

</style>