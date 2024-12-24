<template>
      <v-container fluid class="d-flex align-center" style="height: 80vh;">
    <v-row>
      <v-col cols="3">
      </v-col>
      <v-col cols="6">
        <LinkReceiver @guitarPrice="updatePrice"/>
        <GuitarCalc :inputPrice="price" :latestCurrency="latestCurrency"/>
      </v-col>
      <v-col cols="3">
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script>
import LinkReceiver from '@/components/LinkReceiver.vue';
import GuitarCalc from '@/components/GuitarCalc.vue';

export default {
    name: "DigiMartView",
    components: {
        LinkReceiver,
        GuitarCalc,
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
