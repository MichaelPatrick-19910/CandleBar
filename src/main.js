import Vue from 'vue'
import App from './App.vue'
import VuePwaInstallPlugin from 'vue-pwa-install'
import './registerServiceWorker'

Vue.use(VuePwaInstallPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
