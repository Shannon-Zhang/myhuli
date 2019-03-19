import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/new'
    },
    {
      path:'/new',
      component: ()=>import('./views/New.vue')
    },
    {
      path:'/syd',
      component:()=>import('./views/Syd.vue')
    },
    {
      path:'/xh',
      component:()=>import('./views/Xh.vue')
    },
    {
      path:'/hlph',
      component:()=>import('./views/Hlph.vue')
    },
    {
      path:'/profile',
      component:()=>import('./views/Profile.vue')
    },
    {
      path:'/management',
      component:()=>import('./views/Management.vue')
    },
    {
      path:'/honour',
      component:()=>import('./views/Honour.vue')
    },
    {
      path:'/mediareport',
      component:()=>import('./views/Mediareport.vue')
    },
    {
      path:'/contact',
      component:()=>import('./views/Contact.vue')
    },
    {
      path:'/home',
      component:()=>import('./components/home/Home.vue')
    },
    {
      path:'/invest',
      redirect:'/invest/rry',
      component:()=>import('./components/invest/Invest.vue'),
      children:[
        {
          path:'/invest/rry',
          component:()=>import('./components/invest/Rry.vue')
        },
        {
          path:'/invest/wd',
          component:()=>import('./components/invest/Wd.vue')
        },
        {
          path:'/invest/lc',
          component:()=>import('./components/invest/Lc.vue')
        }
      ]
    },
    {
      path:'/companyIntro',
      component:()=>import('./components/CompanyIntro.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/*',
      redirect: '/new'
    }
  ]
})
