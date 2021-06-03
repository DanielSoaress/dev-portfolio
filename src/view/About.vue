<template>
  <b-container> 
      <b-row class="mb-1" >
          <b-col class="d-none d-lg-block d-print-block ">
            <b-img :src="require('../assets/Multitasking-bro.png')" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col class="d-flex align-items-center">
            <div>
              <h1 class="mt-0 pt-0 text-justify">Daniel Soares Francelino</h1>
              <p class="mb-0 pb-0 text-justify">Graduado em Sistemas de Informação, focado em programação web full stack. Capaz de aprender rapidamente e aplicar novas tecnologias, procuro na tecnologia uma forma de inovar e explorar o mundo com uma perspectiva única. Desenvolvendo novas habiliades com a pura curiosidade de querer aprender mais sobre assuntos diferentes.</p>
              <b-row class="d-lg-none hidden-custom my-3  align-center-custom w-100">
                <b-img width="300" height="300" :src="require('../assets/Multitasking-bro-cel.png')" fluid alt="Responsive image"></b-img>
              </b-row>
              <Button class="mt-3 mb-3" to="portfolio" txt="VER PROJETOS"/>
            </div>
          </b-col>
      </b-row>   
      <b-row class="mb-4"> 
          <b-col v-for="card in cards" :key="card.img">
            <Card :data="card"/>
          </b-col>
      </b-row>
      <b-row class="mb-4"> 
          <b-col v-for="card in cardsTwoRow" :key="card.img">
            <Card :data="card"/>
          </b-col>
      </b-row>
      <b-row class="mb-4"> 
          <b-col v-for="card in cardsThreeRow" :key="card.img">
            <Card :data="card"/>
          </b-col>
      </b-row>
      <b-row class="mb-4"> 
          <b-col v-for="card in cardsFourRow" :key="card.img">
            <Card :data="card"/>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Button from "@/components/Button.vue"
import Card from "@/components/Card.vue"


export default {
  data () {
    return {
      cards: [ {title: 'HTML', img: 'html-5.png', text: 'Linguagem de marcação utilizada na construção de páginas na Web.'},
               {title: 'CSS', img: 'css-3.png', text: 'Mecanismo para adicionar estilo a um documento web. '},
               {title: 'JavaScript', img: 'js.png', text: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'},
               {title: 'PHP', img: 'php.png', text: 'Linguagem interpretada livre, capazes de gerar conteúdo dinâmico na World Wide Web.'},
               {title: 'SQL', img: 'sql.png', text: 'Linguagem de pesquisa declarativa padrão para banco de dados relacional.'},
        ],
      cardsTwoRow: [ {title: 'Java', img: 'java.png', text: 'Linguagem de marcação utilizada na construção de páginas na Web.'},
               {title: 'Git', img: 'git.png', text: 'Mecanismo para adicionar estilo a um documento web. '},
               {title: 'Jquery', img: 'jquery.png', text: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'},
               {title: 'Laravel', img: 'laravel.png', text: 'Linguagem interpretada livre, capazes de gerar conteúdo dinâmico na World Wide Web.'},
               {title: 'Bootstrap', img: 'bootstrap.png', text: 'Linguagem de pesquisa declarativa padrão para banco de dados relacional.'},
        ],
      cardsThreeRow: [ {title: 'Vue.js', img: 'vuejs.png', text: 'Linguagem de marcação utilizada na construção de páginas na Web.'},
               {title: 'Vuex', img: 'vuex.png', text: 'Mecanismo para adicionar estilo a um documento web. '},
               {title: 'Vue Router', img: 'vuerouter.png', text: 'Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'},
               {title: 'Vuetify', img: 'vuetify.png', text: 'Linguagem interpretada livre, capazes de gerar conteúdo dinâmico na World Wide Web.'},
               {title: 'BootstrapVue', img: 'bootstrapvue.png', text: 'Linguagem de pesquisa declarativa padrão para banco de dados relacional.'},
        ],
      cardsFourRow: [ {title: 'MySql', img: 'mysql.png', text: 'Linguagem de marcação utilizada na construção de páginas na Web.'},
               {title: 'PostgreSql', img: 'postgresql.svg', text: 'Mecanismo para adicionar estilo a um documento web. '},
               {title: 'Yarn', img: 'yarn.svg', text: 'Linguagem interpretada livre, capazes de gerar conteúdo dinâmico na World Wide Web.'},
               {title: 'Github', img: 'github-white.png', text: 'Linguagem de pesquisa declarativa padrão para banco de dados relacional.'},
        ]
    } 
  },
  methods: {
  },
  components: {
    Button,
    Card
  }
}
</script>

<style>

</style>