import axios from 'axios'

// Variable dynamic (state)
const state = {
  listBookUserId: [],
  listBook: []
}

// Function Mutation for change state
const mutations = {
  setListBookUserId (state, value) {
    state.listBookUserId = value
  },
  setListBook (state, value) {
    state.listBook = value
  }
}

// Stockage function
const actions = {
  // Function for get USER by ID
  getBookUserId ({ commit }, payload) {
    // Check api with axios
    axios.get('/book/user/' + payload).then(res => {
      // Change state with commit
      commit('setListBookUserId', res.data.listBook)
    }).catch((err) => console.log(err))
  },
  // Function for get List BOOK
  getListBook ({ commit }) {
    // Check api with axios
    axios.get('/book').then(res => {
      // Change state with commit
      commit('setListBook', res.data.listBook)
    }).catch((err) => console.log(err))
  },
  // Function crete BOOK
  createBook ({ commit }, payload) {
    let path = '/book?join=false'
    // Condition for filter req in back-end
    if (payload.join === true) path = '/book?join=true'
    // Check api with axios
    axios.post(path, {
      title: payload.title,
      author_id: payload.author_id.id,
      description: payload.description
    }).then(res => {
      // Change state with commit
      if (payload.join === true) commit('setListBookUserId', res.data.listBook)
      // Change state with commit
      else commit('setListBook', res.data.listBook)
    }).catch((err) => console.log(err))
  },
  // Function for delete BOOK
  deleteOneBook ({ commit }, payload) {
    let path = `/book/${payload.id}?join=false`
    // Condition for filter req in back-end
    if (payload.join === true) path = `/book/${payload.id}?join=true`
    axios.delete(path).then(res => {
      // Change state with commit
      if (payload.join === true) commit('setListBookUserId', res.data.listBook)
      // Change state with commit
      else commit('setListBook', res.data.listBook)
    }).catch((err) => console.log(err))
  }
}

// Function calculed
const getters = {
  listBookUserId: state => {
    return state.listBookUserId
  },
  setListBook: state => {
    return state.listBook
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
