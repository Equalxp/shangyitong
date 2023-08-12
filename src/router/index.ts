// vue-router 4版本
import { createRouter, createWebHashHistory } from "vue-router"

// createRouter创建路由实例

export default createRouter({
  // 1.history模式
  history: createWebHashHistory(),
  // 管理路由
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue")
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue")
    },
    {
      path: "/",
      redirect: "/home"
    }
  ],
  // 路由跳转后的滚动到最上方 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
