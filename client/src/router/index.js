import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore'
import { useToast, POSITION } from "vue-toastification";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
   
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Route guard for checking if user is authenticated
router.beforeEach(async(to, from, next) => {
  const authStore = useAuthStore(); // Access the store
  const toast = useToast();
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If route requires authentication
    if (!authStore.isLoggedIn) {
      // If user is not authenticated, redirect to login page
      next({ name: 'login' });
      await toast.error("Restricted access, Please Sign in first", {
        timeout: 2000,
      });
    } else {
      // If user is authenticated, proceed to next route
      next();
    }
  } else {
    // If route does not require authentication, proceed to next route
    next();
  }
});
export default router
