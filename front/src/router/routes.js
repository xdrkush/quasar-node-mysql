
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'crud', component: () => import('pages/Crud.vue') }
    ]
  },

  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':id', name: 'PageUser', component: () => import('pages/User.vue'), props: true }
    ]
  },

  {
    path: '/book',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'PageBook', component: () => import('pages/Book.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
