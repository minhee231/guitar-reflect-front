<template>
    {{ test }}
    {{ latestCurrencyData }}
</template>

<script>
export default {
    name: "GuitarCostCalc",
    props: {
        latestCurrencyData: {
            type: Object,
            required: true
        },
    },

    data: () => ({
        test: {}
    }),

    methods: {
        getKRWCost(inputJPYCost) {
            console.log(this.latestCurrencyData.currency.KRW);
             this.test = Math.floor(inputJPYCost * this.latestCurrencyData.currency.KRW);
            
        }
    },

    watch: {
        latestCurrencyData: {
            immediate: true,
            handler(newData) {
                if (newData.currency?.KRW) {
                    this.getKRWCost(1);
                }
            }
        }
    }
}
</script>
