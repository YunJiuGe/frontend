import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/MyInfo",
    name: "MyInfo",
    component: () => import("@/views/User/MyInfo.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
