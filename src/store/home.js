export default {
  state: {
    listData: [],
  },

  mutations: {
    setListData(state, param) {
      state.listData.push(param)
    },
  },

  actions: {
    setListData(context, param) {
      context.commit('setListData', param)
    },
  },

  getters: {
    listData: state => {
      return state.listData
    },
  }
}