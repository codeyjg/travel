<template>
<!-- 8-7 8-11 -->
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view></router-view>
    </keep-alive>
   
  
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>

</style>
