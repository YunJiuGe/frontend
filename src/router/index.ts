import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/Regist",
    name: "Regist",
    component: () => import("@/views/User/Regist.vue"),
  },
  {
    path: "/Guid",
    name: "Guid",
    component: () => import("@/views/company/equipment/GuidanceFile.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
