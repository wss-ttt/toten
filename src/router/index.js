import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Login from '@/views/login'
import User from '@/views/user'
import Dept from '@/views/dept'
import Role from '@/views/role'

Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/home',
    	name:'Home',
    	component:Home
    },
    {
      path: '/user',
      name: 'User',
      /*meta:{
        requireAuth:true     // 表示需要登录才能进入的
      },*/
      component: User
    },
    {
      path:'/dept',
      name:'Dept',
      component:Dept
    },
    {
      path:'/role',
      name:'Role',
      component:Role
    }
  ]
})

router.beforeEach((to, from, next) => {
  /*if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      // 说明已经登录了	
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    // 不需要登录就可以访问的页面
    next();
  }*/


  if(to.path==='/login'){
    // 如果访问的就是登录页面 可以继续
    next();
  }else{
    // 如果是其他页面 就需要看是否已经登录过了
    let token = localStorage.getItem('token');
    if(token){
      // 说明之前登录过了  可以往后继续了
      next();
    }else{
      // 如果没有登录 就回到登录页面去
      next({path:'/login'});
    }
  }
})
export default router
