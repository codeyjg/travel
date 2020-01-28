<template>
<div>
  <div class="search">
      <input v-model="keyword" type="text"  class="search-input" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
       <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
name:'CitySearch',

data(){
  return{
    keyword: '',
    list: [],
    timer:null
  }
},
 methods:{
      handleCityClick(city){
       this.$store.commit('changeCity',city)
       this.$routr.push('/')
      }
    },
computed: {
    hasNoData () {
      return !this.list.length
    }
  },
watch: {
    keyword () {
        if(this.timer){
            clearTimeout(this.timer)
        }
        if(!this.keyword){
            this.list = [] 
            return 
        }
        this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        } 
        this.list = result
      }, 100)
    }
},
mounted(){
    this.scrol = new Bscroll(this.$refs.search)
},

props:{
    cities:Object
},
}
</script>

<style >
.search {
    background-color: #00bcd4;
    height: 43px;
    margin-top: -1px;
    padding: 10px;
}
.search-input {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border-radius: 10px;
    color: #666;
}
.search-content {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 106px;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: red; */
}
.search-item{
      line-height: 31px;
      padding-left: 10px;
      background: #fff;
      color: #666;
}
</style>