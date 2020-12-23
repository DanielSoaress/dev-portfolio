<template>
  <b-container class="fluid-custom">
        <b-row class="mb-5"> 
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
          <b-col class="d-none d-lg-block d-print-block">
            <b-img width="500" height="500" :src="require('../assets/Programmingpana.png')" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>

        <footer class="mt-1">
          <a class="mr-3" href="https://github.com/DanielSoaress" >            
            <b-img width="30" height="30" :src="require('../assets/github.png')"></b-img>
          </a>
          <a class="ml-3" href="https://www.linkedin.com/in/daniel-soares-26b718145/" >            
            <b-img width="30" height="30" :src="require('../assets/linkedin.png')"></b-img>
          </a>
        </footer>
  </b-container>
</template>

<script>
import Button from "@/components/Button"

export default {
  components: {
    Button
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
  height: 85vh;
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

