<template>
  <div id="app">
    <router-view/>
  <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from './components/content/MainTabbar'

export default {
  components: {
    MainTabbar
  }  
}
</script>

<style>
@import 'assets/css/base.css';

</style>
