import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Error from '../views/Error/Error.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    name: 'Home',
},
{
    path: '*',
    component: Error,
    name: 'Error'
},

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router