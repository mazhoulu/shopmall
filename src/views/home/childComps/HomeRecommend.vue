<template>
    <div class="recommend">
      <ul>
        <li v-for="item,index in recommends">
          <a :href="item.link">
            <img :src="item.image" />
            <p>{{item.title}}</p>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "HomeRecommend",
      props:{
        recommends:{
          type:Array,
          default:function(){
            return []
          }
        }
      },
    }

</script>

<style scoped>
  .recommend{
    margin-top:10px;
  }
  .recommend ul{
    display: flex;
  }
  .recommend ul li{
    flex: 1;
    text-align: center;
  }
  .recommend ul li img{
    width:80px;
    height:80px;
  }
</style>
