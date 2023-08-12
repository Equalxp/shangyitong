// axios 二次封装
//目的1: 利用axios 请求 响应拦截器功能
//目的2: 请求拦截器,一般可以在请求头中携带公共的参数:token
//目的3: 响应拦截器,可以简化服务器返回的数据,处理http网络错误

import axios from "axios"
//@ts-ignore //
import { ElMessage } from "element-plus"

//axios.create方法设置
const request = axios.create({
  baseURL: "/api", // 基础路径
  timeout: 5000 // 超时时间
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 请求拦截器的配置对象 headers属性 通过请求头携带公共参数
  config.headers.lxp = "lxxpS"
  return config //config一定要返回
})

request.interceptors.response.use(
  response => {
    // 响应拦截器成功的回调

    return response // 服务器返回的数据
  },
  error => {
    // 处理http网络的错误
    let status = error.response.status
    switch (status) {
      case 404:
        ElMessage({
          type: "error",
          message: "请求失败"
        })
        break
      case 500|501|502|502:
        ElMessage({
          type: "error",
          message: "服务器挂了哥们"
        })
        break
    }

    return Promise.reject(new Error(error.message))
  }
)

// 对外暴露
export default request
