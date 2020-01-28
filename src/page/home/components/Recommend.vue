<template>
 <div>
     <div class="title">热销推荐</div>
     <ul>
         <router-link
            tag="li"
             class="item border-bottom" 
             v-for="item of list" 
             :to="'/detail/'+item.id"
             :key="item.id">
             <img class="item-img" :src="item.imgUrl">
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
                 <button class="item-button">查看详情</button>
             </div>
         </router-link>
     </ul>
 </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  props:{
      list:Array
  },
  data(){
      return{
         
      }
  }
}
</script>

<style scoped>
.title {
    
    margin-top: 20px;
    line-height: 40px;
    background-color: #eee;
    text-indent: 20px
}
.item {
    overflow: hidden;
    display: flex;
    height: 190px;
}
.item-img {
    width: 170px;
    height: 170px;
    padding: 10px;
}
.item-info {
    flex: 1;
    padding: 10px;
}
.item-title {
    line-height: 25px;
    font-size: 22px;
}
.item-desc {
    line-height: 22px;
    color: #ccc;
}
.item-button {
    color: #fff;
    line-height: 36px;
    margin-top: 14px;
    background-color: #ff9300;
    padding: 0 20px;
    border-radius: 6px;
}
</style>