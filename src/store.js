import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    site_details: {},
  },
  mutations: {
    setSiteDetails(state, details) {
      state.site_details = details;
    },
  },
  actions: {

  }
})
