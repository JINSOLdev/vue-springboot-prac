import Home from "@/pages/TheHome.vue";
import Login from "@/pages/TheLogin.vue";
import Cart from "@/pages/TheCart.vue";
import Order from "@/pages/TheOrder.vue";
import Orders from "@/pages/TheOrders.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/cart', component: Cart},
    { path: '/order', component: Order},
    { path: '/orders', component: Orders},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;