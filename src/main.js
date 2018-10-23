import Vue from 'vue';
import App from './App.vue';
import Galaxy from './Galaxy.vue';

Vue.component('galaxy-far-away', Galaxy);

new Vue({
  render: h => h(App),
}).$mount('#app');
