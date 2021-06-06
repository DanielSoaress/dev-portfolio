<template>
    <b-container>
       <b-row class="my-5">
         <b-row class="d-lg-none hidden-custom mx-auto mb-5 align-center-custom align-center-custom w-100">
               <CardPresentation />
        </b-row>
        <b-col class="d-none d-lg-block d-print-block">
          <CardPresentation  class="mx-auto" />
        </b-col>
        <b-col class="d-flex align-items-center">
          <div>
          <p class="text-justify">Tem dúvidas de como posso ajudar a sua marca? Com certeza, terei respostas para lhe auxiliar, por isso não perca tempo e entra em contato comigo agora.</p>
          <p class="text-justify">ou quer apenas trocar um papo, só me chamar, ficarei feliz em repondê lo.</p>
          </div>
        </b-col>
      </b-row>  
  </b-container>
</template>

<script>
import CardPresentation from "@/components/CardPresentation"

export default {
  components: {
    CardPresentation
  }
}
</script>

<style>


</style>