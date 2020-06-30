import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyAdwjKz66UnPoYAApg_MzafG7bAqiqPnQs",
  authDomain: "crm-homebuh.firebaseapp.com",
  databaseURL: "https://crm-homebuh.firebaseio.com",
  projectId: "crm-homebuh",
  storageBucket: "crm-homebuh.appspot.com",
  messagingSenderId: "377559613164",
  appId: "1:377559613164:web:991c1cf4e530dccf86afc9"
})
let  app

firebase.auth().onAuthStateChanged( () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


