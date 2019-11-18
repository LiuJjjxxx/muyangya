import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import uoload from '@/components/uoloadcopy'

import Index from '@/components/Index'
// Home的路由
import Home from '@/components/Home/Home'
import Evaluate from '@/components/Home/Evaluate'
import Bank from '@/components/Home/Bank'
import Event from '@/components/Home/Event'
import Exchange from '@/components/Home/Exchange'
import BankInfo from '@/components/Home/BankInfo'

// const Bank = () => import('@/components/Home/Bank')
// const Event = () => import('@/components/Home/Event')
// const Exchange = () => import('@/components/Home/Exchange')
// const BankInfo = () => import('@/components/Home/BankInfo')


// Info的路由
import Info from '@/components/Info/Info'
// Car的路由
import Car from '@/components/Car/Car'
// User的路由
import User from '@/components/User/User'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Index'
    },{
      path: '/Index',
      name: 'Index',
      component: Index,
      children:[
        {path:'/Index', redirect: { name: 'Home' }},
        {path:'Home',component:Home,name:'Home'},
        {path:'Info',component:Info,name:'Info'},
        {path:'Car',component:Car,name:'Car'},
        {path:'User',component:User,name:'User'},
        {path:'Evaluate',component:Evaluate,name:'Evaluate'},
        {path:'Bank',component:Bank,name:'Bank'},
        {path:'Exchange',name:'Exchange',component:Exchange},
        {path:'Event',component:Event,name:'Event'},
        {path:'Bank/:id',component:BankInfo,name:'BankInfo'},
      ]
    }
  ]
})
