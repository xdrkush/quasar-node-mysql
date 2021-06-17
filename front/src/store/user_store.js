import axios from 'axios'

const state = {
  listUser: [],
  userId: {}
}

const mutations = {
  setListUser (state, value) {
    state.listUser = value
  },
  setUserId (state, value) {
    state.userId = value
  }
}

const actions = {
  getListUser ({ commit }) {
    console.log('Get List User')
    axios
      .get('/user')
      .then(res => {
        commit('setListUser', res.data.listUser)
      }).catch((err) => console.log(err))
  },
  getUserId ({ commit }, payload) {
    axios
      .get('/user/' + payload).then(res => {
        commit('setUserId', res.data.user)
      }).catch((err) => console.log(err))
  },
  // eslint-disable-next-line no-empty-pattern
  createUser ({ commit }, payload) {
    axios
      .post('/user', {
        name: payload.name,
        mobile: payload.mobile,
        email: payload.email
      }).then(res => {
        commit('setListUser', res.data.listUser)
        commit('setUserId', res.data.user)
      }).catch((err) => console.log(err))
  },
  // eslint-disable-next-line no-empty-pattern
  editOneUser ({ commit }, payload) {
    axios
      .put('/user/' + payload.id, {
        name: payload.name,
        mobile: payload.mobile,
        email: payload.email
      }).then(res => {
        commit('setListUser', res.data.listUser)
      }).catch((err) => console.log(err))
  },
  // eslint-disable-next-line no-empty-pattern
  deleteOneUser ({ commit }, payload) {
    axios
      .delete(`/user/${payload}`)
      .then(res => {
        commit('setListUser', res.data.listUser)
      }).catch((err) => console.log(err))
  }
}

const getters = {
  userID: state => {
    return state.userId
  },
  gettListUser: state => {
    return state.listUser
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
