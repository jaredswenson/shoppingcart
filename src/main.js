// This is the app entry point reigister plugins here
import Vue from 'vue';
window.$ = window.jQuery = require('jquery')
//all global components will be imported from here
import global from "./components/_globals"

// Import style files in your src/main.js before the App.vue file
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import 'mdbvue/build/css/mdb.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/css/page.css';
import './assets/css/client.css';

import App from './App.vue';
import router from './router';
import {store} from './store';
import {getters} from './store';
import {mutations} from './store';
import {actions} from './store';

//modules
import cart from '@/modules/cart'


Vue.config.productionTip = false

new Vue({
  store:store,
  getters: getters,
  mutations: mutations,
  actions: actions,
  router,
  BootstrapVue,
  library,
  faCoffee,
  FontAwesomeIcon,
  cart,
  render: h => h(App)
}).$mount('#app')