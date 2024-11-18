<template>
    {{ latestCurrency }}
    
    

    <v-container class="fill-height" fluid>
    <v-row class="justify-center align-center ">
    <v-card class="pa-4 container-custom portfolio-card rounded-xl" outlined>
        <v-text-field 
        label="¥가격 입력" 
        v-model="inputJPYCost" 
        @input="getKRWCost"
    ></v-text-field>
    
    <v-col>
        <span>
            ￦
            <H1>{{ guitarCost.KRW }}원</H1>
        </span>
        <span>{{ guitarCost.KRW }}</span> 
    </v-col>
  </v-card>
    </v-row>
  </v-container>
</template>

<script>
import guitarCostCalculator from '@/service/guitar-cost-calculator';

export default {
    name: "GuitarCostCalc",
    props: {
        latestCurrency: {
            type: Object,
            required: true
        },
    },

    data: () => ({
        inputJPYCost: "",
        test: 0,
        guitarCost: {},
    }),

    methods: {
        // getKRWCost() {
        //     const sanitizedInput = String(this.inputJPYCost).replace(/[^0-9]/g, ""); 
        //     const numericInput = parseFloat(sanitizedInput);

        //     if (!isNaN(numericInput)) {
        //         console.log(this.latestCurrency.currency.KRW);
        //         console.log(numericInput);
        //         this.guitarCost.KRW = new Intl.NumberFormat().format(Math.floor(numericInput * this.latestCurrency.currency.KRW));
        //     } else {
        //         this.test = 0;
        //     }
        // }
        getKRWCost() {
            const sanitizedInput = String(this.inputJPYCost).replace(/[^0-9]/g, ""); 
            const numericInput = parseFloat(sanitizedInput);
            var krwCost = null

            krwCost = guitarCostCalculator.jpyToKrw(numericInput, this.latestCurrency.currency.KRW);

            this.guitarCost.KRW = new Intl.NumberFormat().format(krwCost);
        }
    },
}
</script>

<style scoped>

.portfolio-card {
    min-width: 30%;
    text-align: center;
}

/*.container-custom {
    background-color: #517FF5;
} */
</style>