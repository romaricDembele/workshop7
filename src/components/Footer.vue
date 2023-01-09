<template>

    <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>romadembele@protonmail.com</strong>
          </v-col>
    </v-row>

</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        data(){
            return {
                links: [
                "Home",
                "About Us",
                "Team",
                "Services",
                "Blog",
                "Contact Us",
                ],
            }
        }
    })

</script>