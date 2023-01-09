<script lang="ts">
  import Banner from '../components/Banner.vue'
  import Product from '../components/Product.vue'
  import Products from '@/components/Products.vue'

  import products from '@/products'

  export default {
    data(){
      return {
        products: products,
      }
    },
    components: {
      Products
    }
}

</script>

<template>  
  <Products></Products>
</template>
