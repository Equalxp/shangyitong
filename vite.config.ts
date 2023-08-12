import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  // 配置代理跨域
  server: {
    proxy: {
      "/api": {
        // 服务器
        target: "http://syt.atguigu.cn",
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, "") // 不需要路径重写
      }
    }
  }
})
