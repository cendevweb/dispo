import { createWebHistory, createRouter } from "vue-router";
import Home from "../Home.vue"
import DispoForm from "../DispoForm.vue"
import Friends from "../Friends.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dispo",
    name: "Dispo",
    component: DispoForm,
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
