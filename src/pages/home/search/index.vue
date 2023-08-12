<template>
  <div class="search">
    <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input w-50"
      placeholder="Please Input Hospital's name" @select="handleSelect" />
    <el-button type="primary" size="default" @click="search" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">

import { Search } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  // background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;

  // 深度选择器 :>>>  /deep/  ::v-deep 
  // 直接设置width: 400px无效
  ::v-deep(.el-input__wrapper) {
    width: 500px;
    margin-right: 10px;
  }
}
</style>
