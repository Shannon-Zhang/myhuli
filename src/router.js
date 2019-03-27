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
      path:'/login',
      component:()=>import('./components/home/Login.vue')
    },
    {
      path:'/register',
      component:()=>import('./components/home/Register.vue')
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
          component:()=>import('./components/invest/wd/Wd.vue'),
          children:[
            {
              path:'/invest/wd/ztxm',
              component:()=>import('./components/invest/wd/ztxm.vue')
            },
            {
              path:'/invest/wd/ht',
              component:()=>import('./components/invest/wd/ht.vue')
            },
            {
              path:'/invest/wd/zrxm',
              component:()=>import('./components/invest/wd/zrxm.vue')
            }
          ]
        },
        {
          path:'/invest/lc',
          redirect:'/invest/lc/hying',
          component:()=>import('./components/invest/lc/Lc.vue'),
          children:[
            {
              path:'/invest/lc/zr',
              component:()=>import('./components/invest/lc/zr.vue')
            },
            {
              path:'/invest/lc/hying',
              component:()=>import('./components/invest/lc/hying.vue')
            },
            {
              path:'/invest/lc/hyou',
              component:()=>import('./components/invest/lc/hyou.vue')
            },
            {
              path:'/invest/lc/hb',
              component:()=>import('./components/invest/lc/hb.vue')
            }
          ]
        }
      ]
    },
    {
      path:'/companyIntro',
      component:()=>import('./components/companyIntro/CompanyIntro.vue'),
    },
    {
      path:'/aboutUs',
      component:()=>import('./components/companyIntro/aboutUs.vue')
    },
    {
      path:'/team',
      component:()=>import('./components/companyIntro/team.vue')
    },
    {
      path:'/media',
      component:()=>import('./components/companyIntro/media.vue')
    },
    {
      path:'/address',
      component:()=>import('./components/companyIntro/address.vue')
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
