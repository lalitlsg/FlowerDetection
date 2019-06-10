import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Students from './views/Students.vue'
import Guide from './views/Guide.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    }
  ]
})
