<template>
    <LinkReceiver @guitarPrice="updatePrice"/>
    <div style="max-width: 30%;">
        <GuitarCalc :inputPrice="price" :latestCurrency="latestCurrency"/>
    </div>
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
