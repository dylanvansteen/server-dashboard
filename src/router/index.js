import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard'
import Login from '@/views/login'
import Server from '@/views/servers'
import Layout from '@/views/shared/layout'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: App,
      redirect: '/app',
      children: [
        {
          path: 'Login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'app',
          name: 'app',
          component: Layout,
          redirect: { name: 'dashboard' },
          caseSensitive: false,
          children: [
            {
              path: 'dashboard',
              name: 'dashboard',
              component: Dashboard
            },
            {
              path: 'server',
              name: 'server',
              component: Server
            }
          ]
        }
      ]
    },
    {
      path: '**',
      redirect: '/'
    }
  ]
})
