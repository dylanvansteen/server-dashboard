// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFire from 'vuefire';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import './config/firebase';
import('../node_modules/vuetify/dist/vuetify.min.css')
import '@/components/index'
Vue.use(VueFire);
Vue.use(Vuex);
Vue.use(Vuetify);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
