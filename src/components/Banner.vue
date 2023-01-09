<script lang="ts">

    export default {
        name: 'Banner',
        data(){
            return {
                
            }
        },
        methods: {}
    }

</script>

<template>
    <v-row>
        <v-col justify="left" class="text-left mx-3">@AFRICAN RESTAURANT</v-col>
        <v-col justify="center" class="text-center mx-3">
            <router-link to="/">Home</router-link>
        </v-col>
        <v-col justify="right" class="text-right mx-3">
            <router-link to="cart">Cart</router-link>
        </v-col>
    </v-row>


</template>