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
  methods: {
    rulesRoute(path) {
      path == '/' ? this.isHome = true  : this.isHome = false 
      if(path == '/card' || path == '/curriculo') 
        this.showMenu = false
      else
        this.showMenu = true 
      path == '/contact' ? this.showSpline = true  : this.showSpline = false 
    }
  },
  mounted: function () { 
    this.rulesRoute(this.$route.path)

  },
  watch: {
    $route(to) {
      this.rulesRoute(to.path)
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


