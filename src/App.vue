<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="slot-icon" src="~assets/img/logo.png" />
        <img slot="slot-icon-active" src="~assets/img/home.png" />
        <div slot="slot-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="slot-icon" src="~assets/img/logo.png" />
        <div slot="slot-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart" activeColor="blue">
        <img slot="slot-icon" src="~assets/img/logo.png" />
        <div slot="slot-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="blue">
        <img slot="slot-icon" src="~assets/img/logo.png" />
        <div slot="slot-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
