import Vue from 'vue'
import Vuex from 'vuex'

import plaingField from './modules/plaingField'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    plaingField
  }
})
