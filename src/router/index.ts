import { createWebHistory, createRouter } from "vue-router";
import Home from "../Home.vue"
import DispoForm from "../DispoForm.vue"
import Friends from "../Friends.vue"
import Login from "../Login.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/dispo",
    name: "Dispo",
    component: DispoForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
        next()
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'userboard'})
      }
  }else {
      next()
  }
})

export default router;
