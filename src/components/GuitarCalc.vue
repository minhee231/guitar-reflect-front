<template>
    {{ latestCurrency }}
    <v-container class="fill-height" fluid>
    <v-row class="justify-center align-center ">
    <v-card class="pa-4 container-custom portfolio-card rounded-xl" outlined>
        <v-text-field 
        label="¥가격 입력" 
        v-model="inputJPYCost" 
        @input="calculateCost"
    ></v-text-field>

    <div class="d-flex justify-center align-center">
    <v-checkbox @change="calculateCost" v-model="costOption" label="관세" value="isDutyApplied" inline></v-checkbox>
    <v-checkbox @change="calculateCost" v-model="costOption" label="부가세(한국)" value="isVATApplied" inline></v-checkbox>
    <v-checkbox @change="calculateCost" v-model="costOption" label="관세 감면" value="isDutyDiscountApplied" inline></v-checkbox>    
    <v-checkbox @change="calculateCost" v-model="costOption" label="택스 프리/리펀" value="isTaxFreeApplied" inline></v-checkbox>

    </div>
    <v-row style="margin: 3px;">dasd</v-row>
    {{ finalPrice }}
    {{ guitarCost.KRW }}
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
        guitarCost: {},
        costOption: [
            "isDutyApplied",
            "isVATApplied",
            "isDutyDiscountApplied",
            "isTaxFreeApplied",
        ],
        finalPrice: {
            priceKrw: 0,
            priceUsd: 0,
            priceJpy: 0
            },
        purchaseMethod: [],
    }),

    methods: {
        formatPrice(value) {
            if (!value) return '0';
            return new Intl.NumberFormat().format(Math.floor(value));
        },

        //KRW 유지
        calculateCost() {
            console.log("새로 계산")
            const sanitizedInput = String(this.inputJPYCost).replace(/[^0-9]/g, ""); 
            const numericInput = parseFloat(sanitizedInput);
            //let defaultPriceKrw = guitarCostCalculator.convertCurrency(numericInput, this.latestCurrency.currency.JPY.KRW);
            this.finalPrice.priceJpy = numericInput
            //let defaultPriceJpy = numericInput;
            //let defaultPriceUsd = guitarCostCalculator.convertCurrency(numericInput, this.latestCurrency.currency.JPY.USD);
            //let priceKrw = guitarCostCalculator.convertCurrency(numericInput, this.latestCurrency.currency.KRW);
            // let priceKrw = defaultPriceKrw;
            // let priceUsd = d
            if (this.costOption.includes("isTaxFreeApplied")) {
                this.finalPrice.priceJpy = guitarCostCalculator.calculateTaxFreePrice(this.finalPrice.priceJpy)
            }

            if (this.costOption.includes("isDutyApplied")) {
                
                let duty = guitarCostCalculator.calculateDuty(this.finalPrice.priceUsd)
                console.log("왜"+ duty)
                if (this.costOption.includes("isDutyDiscountApplied")) {
                    duty = guitarCostCalculator.calculateDutyReduction(duty*this.latestCurrency.currency.USD.KRW)
                    console.log("아니"+ duty)
                    this.finalPrice.priceKrw += duty
                    console.log("진짜"+ this.finalPrice.priceKrw)
                }

                else {
                    this.finalPrice.priceUsd += duty
                }
            }

            else {
                this.costOption = this.costOption.filter(option => option !== "isDutyDiscountApplied");
            }

        
            if (this.costOption.includes("isVATApplied")) {
                this.finalPrice.priceUsd = guitarCostCalculator.calculateGuitarVAT(this.finalPrice.priceUsd)
            }


        },
    },
    watch: {
    
    'finalPrice.priceKrw'(newValue) {
      this.finalPrice.priceUsd = newValue * this.latestCurrency.currency.KRW.USD
      this.finalPrice.priceJpy = newValue * this.latestCurrency.currency.KRW.JPY
    },

    'finalPrice.priceUsd'(newValue) {
      this.finalPrice.priceKrw = newValue * this.latestCurrency.currency.USD.KRW
      this.finalPrice.priceJpy = newValue * this.latestCurrency.currency.USD.JPY
    },
    
    'finalPrice.priceJpy'(newValue) {
      this.finalPrice.priceKrw = newValue * this.latestCurrency.currency.JPY.KRW
      this.finalPrice.priceUsd = newValue * this.latestCurrency.currency.JPY.USD
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


.inline-card {
display: inline;
margin: 10%;
}
</style>