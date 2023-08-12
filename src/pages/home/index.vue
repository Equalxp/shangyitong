<template>
  <div>
    <!-- 轮播图组件 -->
    <Carousel></Carousel>
    <!-- 搜索的表单区域 -->
    <Search></Search>
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level></Level>
        <!-- 地区子组件 -->
        <Region></Region>
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <!-- 要把数据传给子组件card -->
          <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item"></Card>
        </div>
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[3, 5, 10]"
          :background="true" layout=" prev, pager, next, jumper,->, sizes,total" :total="total"
          @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入组合式API函数
import { onMounted, ref } from 'vue'
// 引入首页轮播
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import type { Content } from '@/api/home/type'
import { reqHospital } from '@/api/home/index.ts'
// 分页器需要的数据
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
// 返回的已有的医院的数据
let hasHospitalArr = ref(<Content>[])
// 返回的医院总个数
let total = ref<number>(0)
onMounted(() => {
  // 挂载发请求捞数据
  getHospitalInfo()
})

// 获取已有的医院数据
const getHospitalInfo = async () => {
  // 先获取第一页 一页10条数据
  let { data:result }:any = await reqHospital(pageNo.value, pageSize.value)
  console.log("111", result);
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content
    total.value = result.data.totalElements
  }
}
// 每一页展示的数据变化
const handleSizeChange = () => {
  getHospitalInfo()
}
// 当前页码的改变
const handleCurrentChange = () => {
  getHospitalInfo()
}
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>