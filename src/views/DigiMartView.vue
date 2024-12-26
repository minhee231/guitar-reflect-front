<template>
      <v-container fluid class="d-flex align-center" style="height: 80vh;">
    <v-row>
      <v-col cols="3">
      </v-col>
      <v-col cols="6">
        <LinkReceiver @guitarPrice="updatePrice"/>
        <GuitarCalc :inputPrice="price" :latestCurrency="latestCurrency"/>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="1">
        <!-- <LatestProduct/> -->
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script>
import LinkReceiver from '@/components/LinkReceiver.vue';
import GuitarCalc from '@/components/GuitarCalc.vue';
import LatestProduct from '@/components/LatestProduct.vue';

export default {
    name: "DigiMartView",
    components: {
        LinkReceiver,
        GuitarCalc,
        LatestProduct,
    },

    props: {
        latestCurrency: {
            type: Object,
            required: true
        },
    },

    data: () => ({
        price: 0,
    }),

    methods: {
        updatePrice(newPrice) {
            this.price = newPrice;
        },
    },  
}

</script>
