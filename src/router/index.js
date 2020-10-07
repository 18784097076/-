import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default new VueRouter({
    routes: [
        {path:'/msite', component: MSite, meta: {showFooter: true}},
        {path:'/search', component: Search, meta: {showFooter: true}},
        {path:'/order', component: Order, meta: {showFooter: true}},
        {path:'/profile', component: Profile, meta: {showFooter: true}},
        {path:'/login', component: Login},
        {path:'/', redirect: '/msite'}
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})