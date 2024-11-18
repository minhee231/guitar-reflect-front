<template>
    {{ test }}
    {{ latestCurrency }}
</template>

<script>
export default {
    name: "GuitarCostCalc",
    props: {
        latestCurrency: {
            type: Object,
            required: true
        },
    },

    data: () => ({
        test: {}
    }),

    methods: {
        getKRWCost(inputJPYCost) {
            console.log(this.latestCurrency.currency.KRW);
             this.test = Math.floor(inputJPYCost * this.latestCurrency.currency.KRW);
            
        }
    },

    watch: {
        //테스트임
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
