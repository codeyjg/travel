<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont">
              &#xe6b7;
          </span>
      </div>
      <div class="header-input">
          <span class="iconfont">
              &#xe633;
          </span>
          输入城市/景点/游玩主题
          </div>
          <router-link to="/city">
              <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont arrow-icon">
              &#xe64a;
          </span>
      </div>
          </router-link>
      
      
  </div>
</template>

<script>
export default {
  name:'HomeHeader',
  props:{
     
  }
}
</script>

<style scoped>
.header {
    line-height:43px;
    display: flex;
    background-color: #00bcd4;
    color: #fff;
}
.header-left {
    width: 32px;
    float: left;
    padding-left: 10px;
}
.header-right {
    min-width: 62px;
    padding: 0 5px;
    float: right;
    text-align: center;
     color: #fff;
}
.header-input {
    flex:1;
    background-color: #fff;
    height: 34px;
    line-height: 34px;
    margin-top: 6px;
    border-radius: 5px;
    color: #ccc;
    padding-left: 10px;
}
.arrow-icon {
    font-size: 12px;
    margin-left: -2px;
}
</style>