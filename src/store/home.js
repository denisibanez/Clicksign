export default {
  state: {
    listData: [],
    highlite: false,
  },

  mutations: {
    setListData(state, param) {
      state.listData.push(param)
    },

    setHighlite(state, param) {
      state.highlite = param
    },
  },

  actions: {
    setListData(context, param) {
      context.commit('setListData', param)
      context.commit('setHighlite', true)
      context.dispatch('setHighlite', false)
    },

    setHighlite(context) {
      setTimeout(() => {
        context.commit('setHighlite', false)
      }, 10000)
    }
  },

  getters: {
    listData: state => {
      return state.listData
    },

    highlite: state => {
      return state.highlite
    },
  }
}