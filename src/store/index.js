import {createStore} from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.创建store对象

const state = {
  cartList: []
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

// 2.挂在Vue实例上
export default store
