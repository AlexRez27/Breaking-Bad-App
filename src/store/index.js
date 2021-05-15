import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const breakingBadUrl = 'https://www.breakingbadapi.com/api/'
const OMDBUrl = 'http://www.omdbapi.com/?apikey=88e836ce&i=tt0903747'

export default new Vuex.Store({
  actions: {
    async getData ({ commit }, { entity, name, baseUrl = breakingBadUrl }) {
      let url = ''
      if (baseUrl !== 'OMDB') {
        if (name) {
          url = `${baseUrl}${entity}?name=${name.replace(/\s/g, '+')}`
        } else {
          url = `${baseUrl}${entity}`
        }
      } else {
        url = OMDBUrl
      }
      await axios.get(`${url}`)
        .then(
          (response) => {
            commit('showData', response.data)
          },
          (error) => { console.log(error) }
        )
    }
  },
  state: {
    data: []
  },
  mutations: {
    showData (state, data) {
      state.data = data
    }
  },
  getters: {
    getInfo (state) {
      return state.data
    }
  }
})
