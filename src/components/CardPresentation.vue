<template>
        <div class="card-presentation p-4">
            <b-img class="mb-4 mx-auto" width="150" height="150" :src="require('../assets/perfil.jpg')" rounded="circle" alt="Perfil image"></b-img>
            <div class="text">
                <b>Daniel Soares</b> <br> <span class="cargo">FullStack Developer</span>
            </div>
            <b-row class="mt-3">
                <b-col cols="6">
                    <b-button href="https://github.com/DanielSoaress"  class="w-100 d-flex align-items-center justify-content-center">
                        <b-img  class="mr-1" width="20" height="20" :src="require('../assets/github-white.png')"></b-img>
                        <span>Github</span></b-button>
                </b-col>
                <b-col cols="6">
                    <b-button href="https://www.linkedin.com/in/daniel-soaress/" class="w-100 d-flex align-items-center justify-content-center">
                        <b-img  class="mr-1 linkedin" width="16" height="16" :src="require('../assets/icons/linkedin.png')"></b-img>
                        <span >Linkedin</span>
                    </b-button>
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col cols="6">
                    <b-button href="https://danielsoares.dev.br/" class="w-100 d-flex align-items-center justify-content-center">
                        <b-img  class="mr-1" width="20" height="20" :src="require('../assets/icons/global.png')"></b-img>
                        <span>Portfólio</span></b-button>
                </b-col>
                <b-col cols="6">
                    <b-button href="https://www.instagram.com/lost_dsf/" class="w-100 d-flex align-items-center justify-content-center">
                        <b-img  class="mr-1" width="20" height="20" :src="require('../assets/icons/instagram.png')"></b-img>
                        <span>Instagram</span></b-button>
                </b-col>
            </b-row>
            <p class="email">danielsoaresf@hotmail.com</p>
        </div>
</template>

<style>
  .card-presentation-container {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-presentation  {
        max-width: 300px;
        height: auto;
        margin: 0 auto;
        background: rgba( 255, 255, 255, 0.1);
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    .card-presentation .linkedin {
        position: relative;
        top: -2.5px;
    }

    .card-presentation .text {
        font-size: 1.5rem;
        line-height: 1.4rem;
    }
    .card-presentation .cargo {
        font-size: 1.125rem;
    }

    .card-presentation .email {
        font-size: 0.875rem;
        margin-bottom: 0px;
        margin-top: 15px;
    }
</style>