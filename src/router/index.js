import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananBerhasil from '../views/PesananBerhasil.vue'
import DaftarMitra from '../views/DaftarMitra.vue'
import ProductMitra from '../views/ProductMitra.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/foods',
        name: 'Foods',
        component: Foods
    },
    {
        path: '/foods/:id',
        name: 'FoodDetail',
        component: FoodDetail
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/pesanan-berhasil',
        name: 'PesananBerhasil',
        component: PesananBerhasil
    },
    {
        path: '/daftar-mitra',
        name: 'DaftarMitra',
        component: DaftarMitra
    },
    {
        path: '/product-mitra',
        name: 'ProductMitra',
        component: ProductMitra
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router