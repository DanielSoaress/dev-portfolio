<template>
  <b-container class="fluid-custom">
      <b-row class="mb-5 "> 
        <b-row class="d-lg-none align-center-custom w-100">
              <b-img width="300" height="300" :src="require('../assets/Resumefolder-pana.png')" fluid alt="Responsive image"></b-img>
        </b-row>
        <b-col class="d-none d-lg-block d-print-block">
          <b-img  width="500" height="500" :src="require('../assets/Resumefolder-pana.png')" fluid alt="Responsive image"></b-img>
        </b-col>
        <b-col class="d-flex align-items-center">
          <div>
            <p class="mb-0 pb-0 text-justify">Em breve colocarei projetos de minha autoria.</p>
            <Button class="mt-3" to="contact" txt="ENTRAR EM CONTATO"/>
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