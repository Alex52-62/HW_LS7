import Vue from 'vue'
import Router from 'vue-router'

// import Dashboard from '../views/Dashboard'
// import About from '../views/About'
// import NotFound from '../views/NotFound'
// import AddPayment from '../components/AddPayment'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [   
        {
            path:'/calc',
            component: ()=>import(/* webpackChunkName: 'Calc' */'../components/Calc.vue'),
            name: 'calc'
        },
        {
            path:'/dashboard',
            component: ()=>import(/* webpackChunkName: 'Dashboard' */'../views/Dashboard.vue'),
            name: 'dashboard'
        },
        {
            path:'/dashboard/:page',
            component: ()=>import(/* webpackChunkName: 'Dashboard' */ '../views/Dashboard.vue'),
            name: 'dashboard'
        },
        {
            path:'/add/payment/:category/',
            component: ()=>import(/* webpackChunkName: 'AddPayment' */'../components/AddPayment'),
            name: 'addPayment'
        },
        {
            path:'/about',
            component: ()=>import(/* webpackChunkName: 'About' */'../views/About.vue'),
            name: 'about'
        },
        {
            path:'/notfound',
            component: ()=>import(/* webpackChunkName: 'NotFound' */ '../views/NotFound.vue'),
            name: 'NotFound'
        }
    ]
})

// const isAuth = false

// router.beforeEach((to, from, next)=>{
//     if (to.name !== 'NotFound' && !isAuth) {
//         next({path: '/notfound'})
//     }else{
//         next()
//     }
//     console.log(to, from, next)
// })

// router.beforeResolve((to, from, next)=>{
//     console.log(to, from, next)
//     debugger
// })


const getTitle = routName => {
    return {
    'dashboard': 'Take a look on your payments and add more!',
    'about': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
    }[routName]
}

router.afterEach((to)=>{
    document.title =getTitle(to.name)
})

export default router