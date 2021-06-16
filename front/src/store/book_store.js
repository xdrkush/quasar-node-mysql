import axios from 'axios'

const state = {
  listBookUserId: []
}

const mutations = {
  setListBookUserId (state, value) {
    state.listBookUserId = value
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  getBookUserId ({ commit }, payload) {
    axios
      .get('/book/user/' + payload)
      .then(res => {
        commit('setListBookUserId', res.data.listBook)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  createBook ({ commit }, payload) {
    axios
      .post('/book', {
        title: payload.title,
        author_id: payload.author_id,
        description: payload.description
      })
      .then(res => {
        commit('setListBookUserId', res.data.listBook)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  deleteOneBook ({ commit }, payload) {
    axios
      .delete(`/book/${payload}`)
      .then(res => {
        console.log('ress front: ', res.data)
        commit('setListBookUserId', res.data.listBook)
      })
  }
}

const getters = {
  listBookUserId: state => {
    return state.listBookUserId
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
