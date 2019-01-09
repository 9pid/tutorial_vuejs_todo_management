import Vue from 'vue'
import Router from 'vue-router'
import TodoManager from '@/components/TodoManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoManager',
      component: TodoManager
    }
  ]
})
