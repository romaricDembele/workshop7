<script lang="ts">
    import { defineComponent } from 'vue'
    import type { PropType } from 'vue';

    interface Product {
        product_id: string,
        product_name: string,
        image_url: string,
        product_quantity: string,
        product_price: string,
    }

    export default defineComponent({
        data(){
            return {}
        },
        props: {
            product: {type: String, required: true}
            // product: {
            //     type: Object as () => Product,
            //     required: true
            // }
        },
        computed: {
            productObject(){
                return JSON.parse(this.product)
            }
        },
        methods: {}
    })

</script>

<template>
    <v-row justify="center">
        <v-col cols="4">
            <v-table theme="" density="compact">
                <thead>
                    <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Value
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Product ID</td>
                    <td>{{ productObject.product_id }}</td>
                    </tr>
                    <tr>
                    <td>Product Name</td>
                    <td>{{ productObject.product_name }}</td>
                    </tr>
                    <tr>
                    <td>Product Price</td>
                    <td>{{ productObject.product_price }}</td>
                    </tr>
                    <tr>
                    <td>Product Quantity</td>
                    <td>{{ productObject.product_quantity }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>