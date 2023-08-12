// api同一管理
import request from "@/utils/request"
// 统一管理接口的类型
import type { HospitalResponseData } from "./type.ts"

// 枚举管理接口api
enum API {
  // 获取已有的医院的数据接口地址
  HOSPITAL_URL = "/hosp/hospital",
  // 获取医院等级和地区的接口
  HOSPITALLEVElANDREGION_URL = "/cmn/dict/findByDictCode/"
}

export const reqHospital = (page: number, limit: number) => {
  return request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `/${page}/${limit}`)
}

export const reqHospitalLevelAndRegion = (dictCode: string) => {
  return request.get<any, any>(API.HOSPITALLEVElANDREGION_URL + dictCode)
}
