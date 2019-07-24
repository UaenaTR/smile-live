const state = {
  username: 'tr'
}
const getters = {}
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
