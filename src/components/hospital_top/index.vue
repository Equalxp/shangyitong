<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left">
        <img src="../../assets/images/logo.png" alt="">
        <p>预约挂号统一平台</p>
      </div>
      <div class="right">
        <div class="help">帮助中心</div>
        <div class="login">登录/注册</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;

  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background: white;
    // background: skyblue;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #73bdff;
      }
    }
    .right {
      display: flex;
      align-items:center;
      justify-content: center;
      font-size: 16px;
      color: #bbb;
      .help {
        margin-right: 10px;
      }
    }
  }
}</style>