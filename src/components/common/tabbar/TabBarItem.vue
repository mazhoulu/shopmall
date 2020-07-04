<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="slot-icon"></slot>
      </div>
      <div v-else>
        <slot name="slot-icon-active"></slot>
      </div>
      <div :style="isActiveColor">
        <slot name="slot-text"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
               type:String,
               default:'red'
            }
        },
        data(){
            return {
                // isActive: true
            }
        },
        computed:{
          isActiveColor(){
              return this.isActive ? {color:this.activeColor} : {}
          },
          isActive(){
              return this.$route.path.indexOf(this.path) !== -1
          }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        },

    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img{
    width:24px;
    height:24px;
  }
  .active{
    color:red;
  }
</style>
