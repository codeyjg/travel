<template>
<div>
     <city-header></city-header>
     <city-Search
     :cities='citys'
     ></city-Search>
     
     <city-list
     :cities='citys' 
     :hot='hotCity'
     :letter='letter'
     ></city-list>
     
     <city-alphabet 
     :cities='citys'
     @change="handleLetterChange"
     ></city-alphabet>
</div>
  
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet

    },
    data(){
        return{
            citys:{},
            hotCity:[],
            letter:''
        }
    },
    methods:{
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res = res.data
            if(res && res.ret){
                const data = res.data
                this.citys = data.cities
                this.hotCity = data.hotCities
            }
            
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted () {
         this.getCityInfo();
    }
}
</script>

<style>

</style>