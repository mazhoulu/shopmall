<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div  slot="center">首页</div>
    </nav-bar>
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="item,index in banners">
        <a href="http://www.ydcss.com">
          <img :src="item.image">
        </a>
      </yd-slider-item>
    </yd-slider>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
    import Vue from 'vue'
    import NavBar from 'components/common/navbar/NavBar'
    import {getHomeMultidata} from "network/home"
    import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
    import HomeRecommend from './childComps/HomeRecommend'
    Vue.component(Slider.name, Slider);
    Vue.component(SliderItem.name, SliderItem);
    export default {
            name: "Home",
            components:{
              NavBar,
              HomeRecommend
            },
            data(){
              return {
                banners:[],
                recommends:[]
              };
            },
            created() {
                getHomeMultidata().then(res => {
                  this.banners = res.data.banner.list;
                  this.recommends = res.data.recommend.list;
                  console.log(JSON.stringify(this.banners))
                })
            },
    }
</script>

<style scoped>
  .home-nav{
    background:red;
    color:#fff;
  }
</style>
