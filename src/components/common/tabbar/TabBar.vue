<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  .tab-bar{
    height:49px;
    background: #f6f6f6;
    border-top:1px solid #ccc;
    display: flex;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
  }
</style>
