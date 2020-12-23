import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path:'/home',
    name: 'Home',
    component: Home,
    meta: {
      index: 1
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/productDetail/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/ProductDetail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/About.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "about" */ '../views/Address.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/address-edit',
    name: 'AddressEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddressEdit.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/createOrder',
    name: 'CreateOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateOrder.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/productList',
    name: 'ProductList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/user/Setting.vue'),
    meta: {
      index: 2
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
