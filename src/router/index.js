import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutIndex from '@/views/layout/LayoutIndex.vue'
import loginIndex from '@/views/login/index.vue'
import SearchIndex from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import prodetailIndex from '@/views/prodetail/index.vue'
import payindex from '@/views/pay/index.vue'
import myorderIndex from '@/views/myorder/index.vue'

import LayoutHome from '@/views/layout/LayoutHome.vue'
import LayoutCart from '@/views/layout/LayoutCart.vue'
import LayoutCategory from '@/views/layout/LayoutCategory.vue'
import LayoutUser from '@/views/layout/LayoutUser.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: loginIndex },
    {
      path: '/',
      component: LayoutIndex,
      children: [
        { path: '/LayoutHome', name: 'layoutHome', component: LayoutHome },
        { path: '/LayoutCart', name: 'layoutCart', component: LayoutCart },
        { path: '/LayoutCategory', name: 'layoutCategory', component: LayoutCategory },
        { path: '/LayoutUser', name: 'layoutUser', component: LayoutUser }
      ]
    },
    { path: '/search', component: SearchIndex },
    { path: '/search/list', component: SearchList },
    // 商品有很多个所以用到动态路由传参，路由参数中携带id
    { path: '/prodetail/:id', component: prodetailIndex },
    { path: '/pay', component: payindex },
    { path: '/myorder', component: myorderIndex }
  ]
})

export default router
