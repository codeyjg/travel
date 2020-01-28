<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img"> 
              <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <span class="icon-desc">{{item.desc}}</span>
        </div> 
      </swiper-slide>
      
    </swiper>
      
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  props:{
    list:Array
  },
  data() {
      return{
         
      }
  },
  computed: {
    //分页的算法
    pages() {
        const pages = []
        this.list.forEach((item,index) => { 
            const page = Math.floor(index/8)
            if(!pages[page])
            {
                pages[page] = []
            }
            pages[page].push(item)
        })
        return pages
    }
  }
}
</script>

<style scoped>
.icons .swiper-container{
  
    height: 0;
    padding-bottom: 50%;
    
}
.icon {
    position: relative;
    overflow: hidden; 
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    float: left;
    /* background-color: red; */
}
.icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 22px;
    box-sizing: border-box;
    padding: 2px;
    /* background-color: blue; */
}
.icon-img-content { 
    display: block;
    margin: 0 auto;
    height: 100%;
}
.icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    line-height: 22px;
    color: #333;
    text-align: center;
    /* 下面三行代码是当字数超过一定数量最后以三个点表示省略... */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>