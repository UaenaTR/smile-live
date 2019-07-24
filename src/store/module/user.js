const state = {
  username: 'tr'
}
const getters = {
  username (state) {
    return state.username + 'hhh'
  }
}
const mutations = {
  commitUsername (state, data) {
    state.username = data
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
