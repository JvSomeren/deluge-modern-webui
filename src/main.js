import Vue from 'vue'
import App from './App.vue'
import router from './route'

Vue.config.productionTip = false

new Vue( {
  router,
}).$mount('#app')
  render: h => h( App )
} ).$mount( '#app' );
