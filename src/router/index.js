import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/Login.vue'
import LoginSwitch from '@/views/LoginSwitch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginSwitch',
    component: LoginSwitch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router 