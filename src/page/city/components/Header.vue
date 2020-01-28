<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back"> &#xe6b7;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style  scoped>
  .header {
    position: relative;
    overflow: hidden;
    height: 43px;
    line-height: 43px;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    font-size: 20px;
  }
  .header-back {
    position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      text-align: center;
      font-size: 20px;
      color: #fff;

  }

  
   
</style>
