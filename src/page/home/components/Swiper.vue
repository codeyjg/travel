<template>
  <swiper :options="swiperOption">
   
    <swiper-slide v-for="item of list"  :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
   
    
    <div class="swiper-pagination"  slot="pagination"></div>
    
    
  </swiper>
</template>

<script>
export default {
 name:'HomeSwiper',
 props:{
   list:Array
 },
 data(){
     return {
         swiperOption:{
             pagination:'.swiper-pagination',
             loop:true
         },
         
     }
 }
} 
</script>

<style scoped>
  .swiper-img {
      width: 100%; 
  }
</style>