<!--
 * @Author: theman
 * @Date: 2019-08-15 15:59:38
 * @LastEditors: theman
 * @LastEditTime: 2019-08-15 22:29:26
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  margin:0;
  padding:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
