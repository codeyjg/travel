<template>
 <div>
     <div class="title">周末去哪儿</div>
     <ul>
         <li class="yuansu" v-for="item of list" :key="item.id">
            
             <img class="imgyuansu" :src="item.imgUrl">
                <p class="">{{item.title}}</p>
                <p class="">{{item.desc}}</p>                           
         </li>
     </ul>
 </div>
</template>

<script>
export default {
  name:'HomeWeekend',
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

.imgyuansu {
    height: 190px;
    width: 100%;
}

</style>