<template>
  <b-container  class="fluid-custom">
      <Particles />
        <b-row > 
          <b-row class="d-lg-none hidden-custom align-center-custom w-100">
              <b-img width="250" height="250" :src="require('../assets/Programmingpana.png')" fluid alt="Responsive image"></b-img>
          </b-row>
          <b-col class="d-flex align-items-center">
            <div>
              <p class="mb-0 pb-0 text-left custom-p">Olá,</p>
              <h1 class="mt-0 pt-0 text-justify custom-h1">Eu sou Daniel</h1>
              <p class="text-center custom-p">Um autodidata em programação para web.</p>
              <Button class='mt-3' to="about" txt="SABER MAIS"/>
            </div>
          </b-col>
        </b-row>
  </b-container>
</template>

<script>
import Button from "@/components/Button"
import Particles from "@/components/Particles"

export default {
  components: {
    Button,
    Particles
  }
}
</script>

<style>
.fluid-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  height: 80vh;
}

.align-center-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.custom-h1 {
   font-weight: 800;
   font-size: 3rem;
}

.custom-p {
   font-weight: 600;
   font-size: 1rem;
}
</style>

