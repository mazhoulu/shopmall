<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div  slot="center">首页</div>
    </nav-bar>
    <ul>
      <li v-for="item,index in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import {getHomeMultidata} from "network/home"

    export default {
        name: "Home",
        components:{
          NavBar
        },
        data(){
          return {
            list:''
          };
        },
        created() {
            getHomeMultidata().then(res => {
              this.list = res;
              console.log(JSON.stringify(this.list))
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
