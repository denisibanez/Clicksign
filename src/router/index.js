import Vue from 'vue'
import Router from 'vue-router'
import ListContact from '@/pages/ListContact'
import CreateContact from '@/pages/CreateContact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'create-contact',
      component: CreateContact
    },
    {
      path: '/lista-contatos',
      name: 'list-contact',
      component: ListContact
    },
    {
      path: '*',
      name: 'not-found',
      component: CreateContact
    },
  ]
})
