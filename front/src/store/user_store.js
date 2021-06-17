import axios from 'axios'

// Variable dynamic (state)
const state = {
  listUser: [],
  userId: {}
}

// Function Mutation for change state
const mutations = {
  setListUser (state, value) {
    state.listUser = value
  },
  setUserId (state, value) {
    state.userId = value
  }
}

// Stockage function
const actions = {
  // Function for get List USER
  getListUser ({ commit }) {
    // Check api with axios
    axios.get('/user').then(res => {
      // Change state with commit
      commit('setListUser', res.data.listUser)
    }).catch((err) => console.log(err))
  },
  // Function for get USER by ID
  getUserId ({ commit }, payload) {
    // Check api with axios
    axios.get('/user/' + payload).then(res => {
      // Change state with commit
      commit('setUserId', res.data.user)
    }).catch((err) => console.log(err))
  },
  // Function for create USER
  createUser ({ commit }, payload) {
    // Check api with axios
    axios.post('/user', {
      name: payload.name,
      mobile: payload.mobile,
      email: payload.email
    }).then(res => {
      // Change state with commit
      commit('setListUser', res.data.listUser)
      // Change state with commit
      commit('setUserId', res.data.user)
    }).catch((err) => console.log(err))
  },
  // Function for edit USER
  editOneUser ({ commit }, payload) {
    // Check api with axios
    axios.put('/user/' + payload.id, {
      name: payload.name,
      mobile: payload.mobile,
      email: payload.email
    }).then(res => {
      // Change state with commit
      commit('setListUser', res.data.listUser)
    }).catch((err) => console.log(err))
  },
  // Function for delete USER
  deleteOneUser ({ commit }, payload) {
    // Check api with axios
    axios.delete(`/user/${payload}`).then(res => {
      // Change state with commit
      commit('setListUser', res.data.listUser)
    }).catch((err) => console.log(err))
  }
}

// Function calculed
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
