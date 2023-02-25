import { createWebHistory, createRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";

import Login from "@/views/login/LoginView.vue";
import Sales from "@/views/Sales/SalesView.vue";

const routes = [
  {
    path: "/",
    redirect: "/pesquisa",
  },
  {
    path: "/pesquisa",
    name: "Sales",
    component: Sales,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresUnauth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(function (to, _, next) {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next("/login");
  } else if (to.meta.requiresUnauth && authStore.isLoggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
