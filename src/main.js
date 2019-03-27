import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import './assets/animate.css';
import './assets/common.css';
import 'swiper/dist/css/swiper.min.css';


router.beforeEach((to,from,next)=>{
  // debugger
  next()
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
