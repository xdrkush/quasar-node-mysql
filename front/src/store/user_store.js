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
      })
  },
  getUserId ({ commit }, payload) {
    console.log('Get User ID')
    axios
      .get('/user/' + payload)
      .then(res => {
        commit('setUserId', res.data.userID)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  createUser ({ commit }, payload) {
    const p = payload
    axios
      .post('/user', {
        name: p.name,
        mobile: p.mobile,
        email: p.email
      })
      .then(res => {
        commit('setListUser', res.data.listUser)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  editOneUser ({ commit }, payload) {
    const p = payload
    console.log(p)
    axios
      .put('/user/' + p.id, {
        name: p.name,
        mobile: p.mobile,
        email: p.email
      })
      .then(res => {
        commit('setListUser', res.data.listUser)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  deleteOneUser ({ commit }, payload) {
    axios
      .delete(`/user/${payload}`)
      .then(res => {
        commit('setListUser', res.data.listUser)
      })
  }
}

const getters = {
  userID: state => {
    return state.userId
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
