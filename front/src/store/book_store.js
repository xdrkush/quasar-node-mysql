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
    const p = payload
    console.log(p)
    axios
      .post('/book', {
        title: p.title,
        author_id: p.author_id,
        description: p.description
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
