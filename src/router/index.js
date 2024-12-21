import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import About from "../views/About.vue";
import Recipe from "../views/admin/Recipe.vue";

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/recipes',
        name: 'Recipe',
        component: Recipe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router