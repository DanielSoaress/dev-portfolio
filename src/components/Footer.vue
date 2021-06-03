<template>
    <footer  class="mt-1 mb-5">
        <a v-for="link in links" :key="link.src" class="mr-3 btn-footer" :href="link.href" >            
            <b-img width="30" height="30" :src="require('../assets/' + link.src)"></b-img>
        </a>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {href: "https://github.com/DanielSoaress", src: 'github.png'},
                {href: "https://www.linkedin.com/in/daniel-soares-26b718145/", src: 'linkedin.png'}
            ]
        }
    }
}
</script>

<style >
footer {
    position: relative;
    z-index: 1;
}

.btn-footer:hover {
  box-shadow: 0px 0px 1.5rem  black;
}

</style>