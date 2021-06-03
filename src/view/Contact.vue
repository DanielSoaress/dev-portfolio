<template>
    <b-container>
       <b-row class="mb-5">
         <b-row class="d-lg-none hidden-custom align-center-custom align-center-custom w-100">
              <b-img width="300" height="300" :src="require('../assets/MobileMarketing-bro.png')" fluid alt="Responsive image"></b-img>
        </b-row>
        <b-col class="d-none d-lg-block d-print-block">
          <b-img  width="500" height="500" :src="require('../assets/MobileMarketing-bro.png')" fluid alt="Responsive image"></b-img>
        </b-col>
        <b-col class="d-flex align-items-center">
          <div>
          <p class="text-justify">Tem dúvidas de como posso ajudar a sua marca? Com certeza, terei respostas para lhe auxiliar, por isso não perca tempo e entra em contato comigo agora.</p>
          <p class="text-justify">ou quer apenas trocar um papo, só me chamar, ficarei feliz em repondê lo.</p>
          <p class="text-justify">Email: <b>danielsoaresf@hotmail.com</b></p>
          <a class="mr-3 btn-contact" href="https://github.com/DanielSoaress" >            
            <b-img width="50" height="50" :src="require('../assets/github.png')"></b-img>
          </a>
          <a class="mr-3 btn-contact" href="https://www.linkedin.com/in/daniel-soares-26b718145/" >            
            <b-img width="50" height="50" :src="require('../assets/linkedin.png')"></b-img>
          </a>
          <Button class='mt-3' to="card" txt="SABER MAIS"/>
          </div>
        </b-col>
      </b-row>  
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

</style>