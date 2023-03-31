import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/LP.vue"),
      name: "Landing Page",
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
      name: "Login",
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/login/calendar",
      component: () => import("../views/Calendar.vue"),
    },
    {
      path: "/login/chats",
      component: () => import("../views/Chats.vue"),
    },
    {
      path: "/login/home",
      component: Home,
    },
    {
      path: "/login/projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: "/login/projects/completed",
      name: "Completed",
      component: (Completed) => import("../views/Completed.vue"),
    },
    {
      path: "/login/alerts",
      component: () => import("../views/Alerts.vue"),
    },
    {
      path: "/login/settings",
      component: () => import("../views/Settings.vue"),
    },
  ],
});

export default router;
