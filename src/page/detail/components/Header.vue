<template> 
  <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs"> 
      <div class="iconfont header-abs-back">
          &#xe6b7;
          </div> 
          </router-link>
      
      
      <div class="header-fixed" 
      v-show="!showAbs"
      :style="opacityStyle"
      >
        <router-link to="/">
        <div class="iconfont header-fixed-back"> &#xe6b7;</div>
        </router-link>
        景点详情
      </div>
  </div>
</template>

<script>
export default {
name:'DetailHeader',
data(){
    return{
        showAbs:true,
        opacityStyle:{
            opacity:0
        }
    }
},
methods: {
    handleScoll () {
        // console.log(document.documentElement.scrollTop)
        const top = document.documentElement.scrollTop
        if(top > 52){
            let opacity = top/130
            opacity = opacity >1 ? 1 :opacity
            this.opacityStyle = {opacity}
            this.showAbs = false
        } else {
            this.showAbs = true
        }
        
    }
},

activated () {
    window.addEventListener('scroll',this.handleScoll)
},
// 组件解绑
deactivated () {
    window.removeEventListener('scroll',this.handleScoll)
}

}

</script>

<style scoped>
.header-abs {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    background:rgba(0, 0, 0, .6);
}
.header-abs-back {
    color: #fff;
    font-size: 20px;
}
.header-fixed {
    position: fixed;
    z-index: 2;
    top:0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 43px;
    line-height: 43px;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    font-size: 20px;
  }
  .header-fixed-back {
    position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      text-align: center;
      font-size: 20px;
      color: #fff;

  }

</style>