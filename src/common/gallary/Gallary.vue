<template>
  <div class="container" @click="handleGallaryClick">
     <div class="wrapper">
    <swiper :options="swiperOptions">
   
    <swiper-slide v-for="(item,index) in imgs" :key="index">
      <img  class="gallary-img" :src="item">
    </swiper-slide>
    
   
   

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
     </div>
  </div>
</template>

<script>
export default {
name : 'CommonGallary',
data(){
    return{
        swiperOptions: {
            pagination:{
                el:'.swiper-pagination',
                type: 'fraction',
            },
            //当dom有更新时， 解决宽度计算问题
            observeParents: true,
            observer: true
        }
}
},
methods:{
handleGallaryClick(){
    this.$emit('close')
}
},
props:{
    imgs:{
        type:Array,
        default(){
            return []
        }
    }
    
}
}

</script>

<style scoped>
.container {
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}
.wrapper { 
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    
}
.gallary-img {
    width: 100%;
}
</style>