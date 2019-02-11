import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markets: []
  },
  mutations: {
    setMarkets(state, markets) {
      state.markets = markets
    }
  },
  actions: {
    fetchMarkets({ commit }) {
      return client.fetchMarkets()
          .then(markets => commit('setMarkets', markets))
    }
  }
})
