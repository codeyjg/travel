<template>
<!-- 引入Better-scroll -->
  <div class="city-list" ref="wrapper">
      <div>
      <div class="area">
        <div class="title border-topbottom">
            当前城市
            </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
               {{this.$store.state.city}}
            </div>
          </div>
        </div>
      </div>
     <div class="area">
        <div class="title border-topbottom">
            热门城市
            </div>
        <div class="button-list">
          <div class="button-wrapper"
          v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
            >
            <div class="button">
               {{item.name}}
            </div>
          </div>
          
        </div>
        
      </div>
     <div class="area"
      v-for="(item, key) of cities"
        :key="key"
        :ref="key"
     >
         <div class="title border-topbottom">{{key}}</div>
         <div class="item-list ">
             <div class="item border-bottom"
             v-for="innerItem of item"
            :key="innerItem.id"
             @click="handleCityClick(innerItem.name)"
            >
            {{innerItem.name}}
            </div>
             
         </div>
        
     </div>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityLIst',
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    methods:{
      handleCityClick(city){
       this.$store.commit('changeCity',city)
       this.$router.push('/')
      }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            // console.log(this.letter);
            //用Better-scroll将元素与字母绑定，点击相应字母滚动到相应元素
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script> 

<style scoped>

.border-topbottom::before {
    border-color: #777;
  }
.border-topbottom::after {
    border-color: #777;
  }
.border-bottom::before{
    border-color: #777;
}
.title {
    line-height: 30px;
    background-color: #eee;
    padding-left: 10px;
    color: #666;
    font-size: 13px;
  }
.button-list {
    overflow: hidden;
    padding: 5px 30px 5px 5px;
    margin-bottom: 0px;
  }
     
.button-wrapper {
    float: left;
    width: 33.33%;
}
       
.button{

    margin: 5px;
    padding: 5px 0;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;

}
.item-list > .item{
    height: 38px;
    line-height: 38px;
    padding-left: 10px;
}
.city-list {
    overflow: hidden;
    position: absolute;
    top: 106px;
    bottom: 0;
    left: 0;
    right: 0;
}
      
         
</style>