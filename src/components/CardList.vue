<template>
  <div class="row">
      <div class="col-12"
      
      v-for="pais in paises" :key="paises.name"
      >
      <Card :pais="pais"/>

        

    </div>    
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import Card from './Card'
export default {

    components:{
        Card
    },
    setup(){
        const store = useStore()
        
        const paises  = computed(()=>{
            store.getters.topPaisesPoblacion
            if(store.getters.filterLength ){
                return store.state.paisesFiltrados
            }else{
                return store.state.paises
            } 
        })
        
        onMounted(async ()=>{
            await store.dispatch('getPaises')

        })

        return {paises}
    }
}
</script>

<style>

</style>