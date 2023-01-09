<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue'

import products from '@/products'


export default defineComponent({
    data() {
        return {
            products: products,
        };
    },
    components: { 
      Banner,
      Footer 
    }
})

</script>

<template>
    <v-app>
      <v-app-bar app color="blue">
        <Banner></Banner>
      </v-app-bar>

      <v-main >
        <RouterView />
      </v-main>

      <v-footer app>
        <Footer></Footer>
      </v-footer>
    </v-app>
    
</template>

<style >

</style>
