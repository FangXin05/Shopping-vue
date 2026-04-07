<template>
  <div id="app">
    <!-- 测试代码 -->
     <van-button type="primary">主要按钮</van-button>
     <van-button type="info">信息按钮</van-button>
     <van-button type="default">默认按钮</van-button>
      <router-view/>
      <van-switch v-model="checked" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style lang="less">

</style>
