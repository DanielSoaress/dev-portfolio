<template>
  <b-container> 
      <b-row class="mb-0">
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
      <h3 class="mt-0 pt-0 text-justify">Ferramentas e Tecnologias</h3>
      <b-row> 
          <b-col cols="6" sm="6" md="4"  lg="2" v-for="card in cards" :key="card.img">
            <Card class="mt-sm-4 mt-md-4 mt-4" :data="card"/>
          </b-col>
      </b-row>
      <b-row> 
          <b-col cols="6" sm="6" md="4"  lg="2" v-for="card in cardsTwoRow" :key="card.img">
            <Card class="mt-sm-4 mt-md-4 mt-4" :data="card"/>
          </b-col>
      </b-row>
      <b-row > 
          <b-col cols="6" sm="6" md="4"  lg="2" v-for="card in cardsThreeRow" :key="card.img">
            <Card class="mt-sm-4 mt-md-4 mt-4" :data="card"/>
          </b-col>
      </b-row>
      <b-row > 
          <b-col cols="6" sm="6" md="4"  lg="2" v-for="card in cardsFourRow" :key="card.img">
            <Card class="mt-sm-4 mt-md-4 mt-4" :data="card"/>
          </b-col>
      </b-row>
      <div class="my-5">
        <p><br></p>
      </div>
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
               {title: 'JavaScript', img: 'js.png', text: 'Linguagem de programação interpretada estruturada.'},
               {title: 'PHP', img: 'php.png', text: 'Linguagem interpretada livre, capazes de gerar conteúdo dinâmico na Web.'},
               {title: 'SQL', img: 'sql.png', text: 'Linguagem de pesquisa declarativa padrão para banco de dados relacional.'},
               {title: 'Java', img: 'java.png', text: 'Linguagem de programação orientada a objetos'},
        ],
      cardsTwoRow: [ 
               {title: 'Yarn', img: 'yarn.svg', text: 'Gerenciador de pacotes.'},
               {title: 'Git', img: 'git.png', text: 'Sistema de controle de versões distribuído.'},
               {title: 'Github', img: 'github-white.png', text: ' Plataforma de hospedagem de código-fonte e arquivos com controle de versão.'},
               {title: 'Jquery', img: 'jquery.png', text: 'Biblioteca de funções JavaScript.'},
               {title: 'Laravel', img: 'laravel.png', text: 'Framework PHP livre e open-source.'},
               {title: 'Bootstrap', img: 'bootstrap.png', text: 'Framework web com código-fonte aberto para desenvolvimento de componentes de interface.'},
        
        ],
      cardsThreeRow: [ {title: 'Vue.js', img: 'vuejs.png', text: 'Framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário.'},
               {title: 'Vuex', img: 'vuex.png', text: 'Padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js. '},
               {title: 'Vue Router', img: 'vuerouter.png', text: 'Roteador para Vue.js'},
               {title: 'Vuetify', img: 'vuetify.png', text: 'Biblioteca UI de componentes Vue.'},
               {title: 'BootstrapVue', img: 'bootstrapvue.png', text: ' Framework css que juntou as funcionalidades do já existente Bootstrap, e adaptou para o VueJS.'},
               {title: 'Electron', img: 'electron.png', text: 'Framework que permite desenvolver aplicações para desktop usando componentes criados para aplicações web.'},        
        ],
      cardsFourRow: [ {title: 'MySql', img: 'mysql.png', text: 'Sistema de gerenciamento de banco de dados.'},
               {title: 'PostgreSql', img: 'postgresql.svg', text: ' Sistema gerenciador de banco de dados objeto relacional. '},
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