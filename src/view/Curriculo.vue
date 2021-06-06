<template>
    <div class="curriculo-container">
      <b-img fluid :src="require('@/assets/curriculo/curriculo20212.png')"  alt="Perfil image"></b-img>
    </div>
</template>

<script>
  export default {
    mounted: function() {

    }
  }
</script>

<style>
.curriculo-container {
  max-width: 100vw;
  height: 100vh;
}

.curriculo-img {
  position: absolute;
}
</style>
