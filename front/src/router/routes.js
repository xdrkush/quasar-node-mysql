
const routes = [
  // route with layout MAIN
  {
    // root
    path: '/',
    // Layout
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Home Page
      { path: '', component: () => import('pages/Index.vue') },
      // Crud Page
      { path: 'crud', component: () => import('pages/Crud.vue') },
      // User ID Page
      { path: 'user/:id', name: 'PageUser', component: () => import('pages/User.vue'), props: true },
      // Book Page
      { path: 'book', name: 'PageBook', component: () => import('pages/Book.vue'), props: true }
    ]
  },

  // route with layout Admin
  // {
  //   path: '/admin',
  //   component: () => import('layouts/AdminLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Admin.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
