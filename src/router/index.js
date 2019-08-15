/*
 * @Author: theman
 * @Date: 2019-08-15 15:59:38
 * @LastEditors: theman
 * @LastEditTime: 2019-08-15 22:08:52
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from  '@/components/Home'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ],
  mode:'history'
})
