import Vue from 'vue';
import App from './App.vue';
import GoodNum from "@/components/GoodNum.vue";

Vue.config.productionTip = false;
Vue.component('GoodNum', GoodNum )

new Vue({
  render: h => h(App)
}).$mount('#app');

