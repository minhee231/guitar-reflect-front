<template>
    <v-card class="pa-4 portfolio-card theme-surface" max-width="200" outlined>
        <h4 class="text-center">최근 본 상품</h4>
        <v-divider class="my-3"></v-divider>
        <v-card class="theme-surface">
            <v-img 
                v-for="product in latestProduct"
                :key="product.url"
                :src="product.photoUrl"
                :width="100"
                :height="100"
                class="mb-2 d-flex align-center"
                style="margin: 0 10px; object-fit: cover;"
            />
        </v-card>
    </v-card>
</template>

<script>
export default {
    name: "LatestProduct",
    data: () => ({
        latestProduct: [],
    }),
    methods: {
        getLatestProduct() {
            let latestProduct = JSON.parse(localStorage.getItem("latestProduct")) || [];
            console.log(latestProduct);
            this.latestProduct = latestProduct;
        }
    },

    created() {
    this.getLatestProduct();
  }
}
</script>