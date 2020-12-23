<template>
  <div id="app">
    <Menu  class="animate__animated animate__fadeInDown"/>
    <router-view class="animate__animated animate__fadeIn"></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
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

/* Color Theme Swatches in Hex 
.The-Hobbit:-A-Journey-Through-Middle-Earth-1-hex { color: #1A1B26; }
.The-Hobbit:-A-Journey-Through-Middle-Earth-2-hex { color: #585F73; }
.The-Hobbit:-A-Journey-Through-Middle-Earth-3-hex { color: #F2AA52; }
.The-Hobbit:-A-Journey-Through-Middle-Earth-4-hex { color: #D9763D; }
.The-Hobbit:-A-Journey-Through-Middle-Earth-5-hex { color: #A65233; }

Color Theme Swatches in RGBA 
.The-Hobbit:-A-Journey-Through-Middle-Earth-1-rgba { color: rgba(26, 26, 38, 1); }
.The-Hobbit:-A-Journey-Through-Middle-Earth-2-rgba { color: rgba(88, 94, 114, 1); }
.The-Hobbit:-A-Journey-Through-Middle-Earth-3-rgba { color: rgba(242, 170, 82, 1); }
.The-Hobbit:-A-Journey-Through-Middle-Earth-4-rgba { color: rgba(216, 117, 60, 1); }
.The-Hobbit:-A-Journey-Through-Middle-Earth-5-rgba { color: rgba(165, 81, 51, 1); }
*/
</style>


