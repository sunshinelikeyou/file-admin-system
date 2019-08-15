<!--
 * @Author: theman
 * @Date: 2019-08-15 15:59:38
 * @LastEditors: theman
 * @LastEditTime: 2019-08-15 17:20:03
 * @Description: 
 -->
<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'App',
  components:{
    login:Login
  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
