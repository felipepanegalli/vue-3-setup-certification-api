import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StatusView from "../views/StatusView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/status",
    name: "status",
    component: StatusView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
