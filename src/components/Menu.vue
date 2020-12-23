<template>
  <header>
    <b-navbar toggleable="lg" type="dark" >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="mx-auto">
          <b-nav-item to="/">INICIO</b-nav-item>
          <b-nav-item to="/about">SOBRE</b-nav-item>
          <b-nav-item to="/portfolio">PORTFOLIO</b-nav-item>
          <b-nav-item to="/contact">CONTATO</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
    
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  width: 100%;
}

.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.8);
}

.navbar-dark .navbar-nav .nav-link:hover{
    border-bottom-width: 5px;
    border-bottom-style:solid;
    padding-bottom: 0px;
    border-bottom-color:#D9763D;
}


</style>