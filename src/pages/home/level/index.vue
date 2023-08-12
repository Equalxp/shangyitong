<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }">全部</li>
        <li v-for="level in levelArr" :class="{ active: activeFlag == level.value }" :key="level.value"
          @click="changeLevel(level.value)">{{ level.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api/home';
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type';
import { onMounted, ref } from 'vue';
// 定义数组存储医院等级的数组
let levelArr = ref<HospitalLevelAndRegionArr>([])
// 医院等级的高亮效果 
let activeFlag = ref<string>('')
// 组件挂载完毕
onMounted(() => {
  getLevel()
})

const getLevel = async () => {
  // let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType')
  let result1: any = await reqHospitalLevelAndRegion('HosType')
  let result: HospitalLevelAndRegionResponseData = result1.data
  // levelArr.value = result.data.data
  // console.log('333', result);
  if (result.code === 200) {
    levelArr.value = result.data
  }
}
// 点击更改等级的回调
const changeLevel = (level: string) => {
  // 高亮的响应式数据 
  activeFlag.value = level
}
</script>
<script lang="ts">
// 方便开发者工具找到这个组件 取一个名字
export default {
  name: 'Level'
}
</script>
<style lang="scss" scoped>
.level {
  color: #7f7f7f;

  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin-right: 10px;

        &.active {
          color: #55a6fe;
        }
      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>