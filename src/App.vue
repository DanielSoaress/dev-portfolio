<template>
  <div id="app">
    <Menu v-show="showMenu" class="animate__animated animate__fadeInDown"/>
    <router-view class="animate__animated animate__fadeIn"></router-view>
    <Footer v-show="isHome" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      isHome: true,
      showMenu: true
    }
  },
  components: {
    Menu,
    Footer
  },
  mounted: function () { 
   this.$route.path == '/' ? this.isHome = true  : this.isHome = false 
   this.$route.path == '/card' ? this.showMenu = false  : this.showMenu = true 
  },
  watch: {
    $route(to) {
        to.path == '/' ? this.isHome = true  : this.isHome = false
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfdbdb;

  background-color: #1A1B26;
  height: 100vh;
}
</style>


