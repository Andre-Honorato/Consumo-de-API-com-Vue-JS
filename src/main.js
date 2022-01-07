import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css'

export const eventBus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
