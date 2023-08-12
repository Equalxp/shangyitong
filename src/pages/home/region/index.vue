<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul class="hospital">
        <li class="active">全部</li>
        <li>朝阳区</li>
        <li>朝阳区</li>
        <li>朝阳区</li>
        <li>朝阳区</li>
        <li>朝阳区</li>
        <li>朝阳区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.region {
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 5px;
        margin-bottom: 5px;
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
}</style>