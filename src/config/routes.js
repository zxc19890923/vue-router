import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../Home'
import Me from '../Me'

export default new VueRouter ({
    mode: 'history', // 路由模式 hash/history/abstract   哈希、h5
    base: __dirname,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/home', component: Home, name: 'home'
        },
        {
            path: '/me', name: 'me',
            component:  resolve => require(['../Me.vue'], resolve) //懒加载
        },
        {
            path: '*', redirect: Home
        }
    ]
})