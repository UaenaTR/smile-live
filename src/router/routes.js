export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
  },
  {
    path: '/Baberrage',
    name: 'Baberrage',
    component: () => import('../components/Baberrage.vue')
  },
  {
    path: '/SkuSelect',
    name: 'SkuSelect',
    component: () => import('../components/SkuSelect.vue')
  }
]
