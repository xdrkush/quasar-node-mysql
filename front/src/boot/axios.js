/*
 * Config Axios
 * ************ */
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

export default ({ Vue }) => {
  // Link to api (back-end)
  axios.defaults.baseURL = 'http://127.0.0.1:4000'
  axios.defaults.withCredentials = true
  Vue.prototype.$axios = axios
}
