import axios from 'axios'

const state = {
  listBookUserId: [],
  listBook: []
}

const mutations = {
  setListBookUserId (state, value) {
    state.listBookUserId = value
  },
  setListBook (state, value) {
    state.listBook = value
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  getBookUserId ({ commit }, payload) {
    axios
      .get('/book/user/' + payload).then(res => {
        commit('setListBookUserId', res.data.listBook)
      }).catch((err) => console.log(err))
  },
  // eslint-disable-next-line no-empty-pattern
  getListBook ({ commit }) {
    axios
      .get('/book').then(res => {
        console.log('store list book: ', res.data)
        commit('setListBook', res.data.listBook)
      }).catch((err) => console.log(err))
  },
  // eslint-disable-next-line no-empty-pattern
  createBook ({ commit }, payload) {
    let path = '/book?join=false'
    if (payload.join === true) path = '/book?join=true'
    axios
      .post(path, {
        title: payload.title,
        author_id: payload.author_id.id,
        description: payload.description
      }).then(res => {
        console.log('res, data store createbook', res.data)
        if (payload.join === true) commit('setListBookUserId', res.data.listBook)
        else commit('setListBook', res.data.listBook)
      }).catch((err) => console.log(err))
  },
  // eslint-disable-next-line no-empty-pattern
  deleteOneBook ({ commit }, payload) {
    let path = `/book/${payload.id}?join=false`
    if (payload.join === true) path = `/book/${payload.id}?join=true`
    axios.delete(path)
      .then(res => {
        if (payload.join === true) commit('setListBookUserId', res.data.listBook)
        else commit('setListBook', res.data.listBook)
      }).catch((err) => console.log(err))
  }
}

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
