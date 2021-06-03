<template>
    <div class="card-about" v-b-hover="handleHover">
        <div v-if="isHovered" class="card-about-text">
            <h5 class="card-title">{{data.title}}</h5>
            <p class="card-text">{{data.text}}</p>
            <br>

        </div>
        <div v-else class="card-about-img">
            <img :src="require('../assets/'+ data.img )"   />
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data () {
        return {
            isHovered: false
        }
    },
    methods: {
      handleHover(hovered) {
        this.isHovered = hovered
      }
    }
}
</script>


<style scoped>
    .card-about {
        width: 100%;
        box-shadow: 0px 0px 10px black;
    }
    .card-about:hover {
        box-shadow: 0px 0px 25px black;        
    }
    .card-about-text {
        width: 100%;
        height: 150px;
        padding: 10px 15px;
    }
    .card-text {
        font-size: 0.75rem;
        text-align: justify;
    }
    .card-about-img {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card-about-img img {
        max-height: 50%;
    }
</style>