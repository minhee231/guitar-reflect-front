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

        //USD 유지
        calculateCost() {
            console.log("새로 계산@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
            const sanitizedInput = String(this.inputJPYCost).replace(/[^0-9]/g, ""); 
            const numericInput = parseFloat(sanitizedInput);
            
            //numericInput는 JPY
            let priceUsd = numericInput * this.latestCurrency.currency.JPY.USD

            if (this.costOption.includes("isTaxFreeApplied")) { //택스프리
                //this.finalPrice.priceJpy = guitarCostCalculator.calculateTaxFreePrice(this.finalPrice.priceJpy)
                //calculateTaxFreePrice 택스 프리는 일본에서 처리하기 때문에 JPY로 계산 USD -> JPY 해서 보냄
                priceUsd = guitarCostCalculator.calculateTaxFreePrice(priceUsd * this.latestCurrency.currency.USD.JPY) * this.latestCurrency.currency.JPY.USD
            }

            if (this.costOption.includes("isDutyApplied")) { //관세 부가
                
                // let duty = guitarCostCalculator.calculateDuty(this.finalPrice.priceUsd)
                let dutyUsd = guitarCostCalculator.calculateDuty(priceUsd);
                console.log("관세 부가" + dutyUsd);

                if (this.costOption.includes("isDutyDiscountApplied")) { //관세 감면
                    // duty = guitarCostCalculator.calculateDutyReduction(duty*this.latestCurrency.currency.USD.KRW)
                    //this.finalPrice.priceKrw += duty
                    //관세 감면은 한도가 20만원이기 때문에 KRW로 계산함 USD -> KRW 으로 보냄
                    dutyUsd = guitarCostCalculator.calculateDutyReduction(dutyUsd * this.latestCurrency.currency.USD.KRW) * this.latestCurrency.currency.KRW.USD;
                    console.log("감면한 관세" + dutyUsd * this.latestCurrency.currency.USD.KRW)
                    priceUsd += dutyUsd
                }

                else {
                    //감세 감면 비활성화 시
                    // this.finalPrice.priceUsd += duty
                    priceUsd += dutyUsd
                }
            }

            else {
                this.costOption = this.costOption.filter(option => option !== "isDutyDiscountApplied");
            }

        
            if (this.costOption.includes("isVATApplied")) {
                this.finalPrice.priceUsd = guitarCostCalculator.calculateGuitarVAT(this.finalPrice.priceUsd)
                //부가세도 USD로 계산함
                priceUsd = guitarCostCalculator.calculateGuitarVAT(priceUsd);
            }

            this.finalPrice.priceUsd = this.formatPrice(priceUsd)
            this.finalPrice.priceKrw = this.formatPrice(priceUsd * this.latestCurrency.currency.USD.KRW)
            this.finalPrice.priceJpy = this.formatPrice(priceUsd * this.latestCurrency.currency.USD.JPY)
        },
    },
//     watch: {
    
//     'finalPrice.priceKrw'(newValue) {
//       this.finalPrice.priceUsd = newValue * this.latestCurrency.currency.KRW.USD
//       this.finalPrice.priceJpy = newValue * this.latestCurrency.currency.KRW.JPY
//       //console.log("KRW 변동")
//     },

//     'finalPrice.priceUsd'(newValue) {
//       this.finalPrice.priceKrw = newValue * this.latestCurrency.currency.USD.KRW
//       this.finalPrice.priceJpy = newValue * this.latestCurrency.currency.USD.JPY
//       //console.log("USD 변동")
//     },
    
//     'finalPrice.priceJpy'(newValue) {
//       this.finalPrice.priceKrw = newValue * this.latestCurrency.currency.JPY.KRW
//       this.finalPrice.priceUsd = newValue * this.latestCurrency.currency.JPY.USD
//       console.log("JPY 변동")
//     }
//   },
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