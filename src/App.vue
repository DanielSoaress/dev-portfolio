<template>
  <div id="app">
    <div v-show="showSpline" class="spline">
      <iframe src='https://my.spline.design/librarylathe-86ec93995778f5c8ffdc97f984aef04b/' frameborder='0' width='100%' height='100%'></iframe>
    </div>
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
      showMenu: true,
      showSpline: true
    }
  },
  components: {
    Menu,
    Footer
  },
  mounted: function () { 
   this.$route.path == '/' ? this.isHome = true  : this.isHome = false 
   this.$route.path == '/card' ? this.showMenu = false  : this.showMenu = true 
   this.$route.path == '/curriculo' ? this.showMenu = false  : this.showMenu = true 
   this.$route.path == '/contact' ? this.showSpline = true  : this.showSpline = false 

  },
  watch: {
    $route(to) {
        to.path == '/' ? this.isHome = true  : this.isHome = false
        to.path == '/contact' ? this.showSpline = true  : this.showSpline = false 

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

.spline {
  position: absolute;
  width: 100vw;
  height: 100vh;

}
</style>


