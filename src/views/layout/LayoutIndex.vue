<template>
 <div>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item to="/LayoutHome" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/LayoutCategory" icon="apps-o">分类页</van-tabbar-item>
    <van-tabbar-item to="/LayoutCart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/LayoutUser" icon="contact-o">我的</van-tabbar-item>
  </van-tabbar>
 </div>
</template>
<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}

</script>

<style lang="less">

</style>
