import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/post'
    },
    {
        path:'/post',
        name:'Post',
        component:() => 
            import('@/views/post')
    },
    {
        path:'/detail',
        name:'Detail',
        component:() =>
            import('@/views/detail')
    },
    {
        path:'/cart',
        name:'Cart',
        component:() =>
            import('@/views/cart')
    }
]


export default new VueRouter({
    routes,
    mode:'hash'
})