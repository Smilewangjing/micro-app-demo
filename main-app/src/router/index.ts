import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/AllApp.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AllApp.vue"),
    },
    {
      path: "/react",
      name: "React",
      component: () => import("../views/AllApp.vue"),
    },
  ],
});

export default router;
