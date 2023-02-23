import { createWebHistory, createRouter } from "vue-router";
import Sales from "@/views/Sales/SalesView.vue";

const routes = [
  {
    path: "/",
    name: "Sales",
    component: Sales,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
