
import Vue from 'vue'
import VueRouter from 'vue-router'

import routers from './router/index'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
    routers,
    render: h=>h(App)
}).$mount('#app')