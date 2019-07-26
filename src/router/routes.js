export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/Live',
    name: 'Live',
    component: () => import('../components/Live.vue')
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: () => import('../components/Chat.vue')
  }
]
