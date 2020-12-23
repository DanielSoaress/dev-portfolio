<template>
  <b-container> 
      <b-row class="mb-1" >
          <b-col class="d-none d-lg-block d-print-block ">
            <b-img :src="require('../assets/Multitasking-bro.png')" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col class="d-flex align-items-center">
            <div>
              <h1 class="mt-0 pt-0 text-justify">Daniel Soares Francelino</h1>
              <p class="mb-0 pb-0 text-justify">Graduando em Sistemas de Informação, focado em programação web full stack. Capaz de aprender rapidamente e aplicar novas tecnologias, procuro na tecnologia uma forma de inovar e explorar o mundo com uma perspectiva única. Desenvolvendo novas habiliades com a pura curiosidade de querer aprender mais sobre assuntos diferentes.</p>
              <b-row class="d-lg-none hidden-custom my-3  align-center-custom w-100">
                <b-img width="300" height="300" :src="require('../assets/Multitasking-bro-cel.png')" fluid alt="Responsive image"></b-img>
              </b-row>
              <Button class="mt-3 mb-3" to="portfolio" txt="VER PROJETOS"/>
            </div>
          </b-col>
      </b-row>      
  </b-container>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
  components: {
    Button
  }
}
</script>

<style>

</style>