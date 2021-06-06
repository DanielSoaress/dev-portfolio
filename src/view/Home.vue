<template>
  <b-container  class="fluid-custom">
      <Particles />
        <b-row > 
          <b-col class="d-flex align-items-center">
            <div>
              <div id="container-home" v-scrollanimation>
                <p class="mb-0 pb-0 text-left custom-p">Olá,</p>
                <h1 class="mt-0 pt-0 text-justify custom-h1">Eu sou Daniel</h1>
                <p class="text-center custom-p">Desenvolvedor de sistemas com foco em desenvolvimento web.</p>
              </div>
              <Button id="btn-home" class='mt-3' v-scrollanimation to="about" txt="SABER MAIS"/>
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
/* Estilo global */
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

<style >
    /* Estilo local */
    #container-home.before-enter {
        opacity: 0;
        transform: translatex(-100px);
        transition: all 1s ease-out;
    }

    #container-home.enter {
        opacity: 1;
        transform: translatex(0px);
    }

    #btn-home.before-enter {
        opacity: 0;
        transform: translatex(100px);
        transition: all 1s ease-out;
    }

    #btn-home.enter {
        opacity: 1;
        transform: translatex(0px);
    }
</style>