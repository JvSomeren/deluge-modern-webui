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

Vue.filter( 'etaToString', ( val ) => {
  if ( !val ) return 'ETA unsure';

  let timeUnit = 'seconds';

  if ( val / 60 > 60 ) {
    timeUnit = 'minutes';
    val /= 60;
  }

  if ( val / 60 > 60 ) {
    timeUnit = 'hours';
    val /= 60;
  }

  return val + ' ' + timeUnit;
} );

new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' );
