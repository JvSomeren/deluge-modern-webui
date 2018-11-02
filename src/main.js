import Vue from 'vue'
import App from '@/App.vue'
import router from '@/route'
import store from '@/store/index'

import '@/assets/style/index.scss'

Vue.config.productionTip = false;

let round = ( val, decimals = 2 ) => {
  if ( !val ) return '';
  const d = Math.pow( 10, decimals );

  return Math.round( val * d ) / d;
};

Vue.filter( 'round', ( val, decimals = 2 ) => {
  return round( val, decimals );
} );

Vue.filter( 'etaToString', ( val ) => {
  if ( !val ) return 'ETA unsure';

  let timeUnit = 'seconds';

  if ( val / 60 > 1 ) {
    timeUnit = 'minutes';
    val /= 60;
  }

  if ( val / 60 > 1 ) {
    timeUnit = 'hours';
    val /= 60;
  }

  return round( val ) + ' ' + timeUnit;
} );

Vue.filter( 'downloadRateToString', ( val ) => {
  if ( !val ) return '';
  let speedUnit = 'B/s';

  if ( val / 1000 > 1 ) {
    speedUnit = 'KiB/s';
    val /= 1000;
  }

  if ( val / 1000 > 1 ) {
    speedUnit = 'MiB/s';
    val /= 1000;
  }

  return round( val ) + ' ' + speedUnit;
} );

new Vue( {
  router,
  store,
  render: h => h( App )
} ).$mount( '#app' );
