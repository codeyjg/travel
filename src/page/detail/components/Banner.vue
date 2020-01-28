<template>
<div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60d;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default { 
name:'DetailBanner',
props:{
     sightName: String,
    bannerImg: String,
    bannerImgs: Array
},
data(){
    return{
        showGallary:false,
        
    }
},
computed: {
imgLength(){
    this.bannerImgs.length
}
},
methods:{
    handleBannerClick(){
        this.showGallary = true
    },
    handleGallaryClose(){
        this.showGallary = false
    }
},
components:{
    CommonGallary,
    FadeAnimation
}
}
</script>

<style scoped>
.banner {
    /* 防抖动 */
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}
.banner-img {
    width: 100%
}
.banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 30px;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.banner-title {
    flex: 1;
    font-size: 16px;
    padding: 0 10px;
}
.banner-number {
  
    height: 16px;
    line-height: 16px;
    margin-top: 7px;
    padding: 0 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, .8);
    font-size: 12px;
}
</style>