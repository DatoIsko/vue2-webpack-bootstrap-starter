/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue';
import Axios from 'axios';
import store from '@/store';

const token = localStorage.getItem('ft_token') || '';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';
Axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
Axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch('auth/logout');
    }

    return Promise.reject(error);
  });

// Bind Axios to Vue.
Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});
