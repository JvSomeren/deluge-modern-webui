import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store/index'

import './assets/style/base.scss'

Vue.config.productionTip = false;

Vue.filter( 'round', ( val, decimals = 2 ) => {
  if ( !val ) return '';
  const d = Math.pow( 10, decimals );

  return Math.round( val * d ) / d;
} );

new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' );
