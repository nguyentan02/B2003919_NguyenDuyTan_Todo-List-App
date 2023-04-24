import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
            meta: { requiresGuest: true }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue'),
            meta: { requiresGuest: true }
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../views/UserView.vue'),
            meta: { requiresAuth: true }
        }
    ]
})

// router.beforeResolve(async (to, from, next) => {
//     const authStore = useAuthStore()

//     if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//         return next({ name: 'login', query: { redirect: to.fullPath } })
//     } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
//         return next({ name: 'home' })
//     } else {
//         return next()
//     }
// })

export default router