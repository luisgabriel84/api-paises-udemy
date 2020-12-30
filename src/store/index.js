import { createLogger, createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    paisesFiltrados:[]
  },
  mutations: {

    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }

  },
  actions: {
    async getPaises({commit}){
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        
        commit('setPaises',data)
      }catch(error){
        console.log(error)
      }
    },
    filtrarRegion({commit, state}, region){
      const filtro = state.paises.filter(pais =>
        pais.region.includes(region)
      )
      commit('setPaisesFiltrados', filtro)
    },
    filtroNombre({commit, state}, texto){
      const textoCliente = texto.toLowerCase()
      const filtro = state.paises.filter( pais =>{
        const textoApi = pais.name.toLowerCase()
        if(textoApi.includes(textoCliente)){
          return pais
        }
      })
      commit('setPaisesFiltrados', filtro)
    }
  },
  getters:{
    topPaisesPoblacion(state){
      state.paisesFiltrados.sort(( a , b ) => {
        return a.population < b.population ? 1 : -1 
      }) 

    },
    filterLength(state){
      return state.paisesFiltrados.length
    }
  },
  modules: {
  }
})
