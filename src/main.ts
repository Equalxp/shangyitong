import { createApp } from "vue"

import "@/style/reset.scss"
// 根组件APP
import App from "@/App.vue"
// 引入全局组件
import HospitalTop from "@/components/hospital_top/index.vue"
import HospitalBottom from "@/components/hospital_bottom/index.vue"
// 引入vue-router的核心插件并且安装
import router from "@/router/index.ts"
// 引入element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

const app = createApp(App)
app.component("HospitalTop", HospitalTop)
app.component("HospitalBottom", HospitalBottom)
// 安装
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount("#app")
