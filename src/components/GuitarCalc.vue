<template>
    <v-container class="fill-height" fluid>
    <v-row class="justify-center align-center ">
    <v-card class="pa-4 container-custom portfolio-card rounded-xl bg-grey-darken-3" outlined>
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
    <v-divider class="my-3"></v-divider>
    <!-- <div>
        <h2>현지 구매</h2>
        <span class="text-h6 font-weight-bold text-white">KRW</span>
        <v-spacer></v-spacer>   
        <span class="text-h6 text-white">{{ finalPrice.priceKrw }}</span>
        <h2>KRW</h2>
        <p> ￦{{ finalPrice.priceKrw }}</p>
        <h2>JPY</h2>
        <p> ￥{{ finalPrice.priceJpy }}</p>
        <h2>USD</h2>
        <p> ${{ finalPrice.priceUsd }}</p>
    </div> -->

    <v-row class="d-flex justify-center align-center">
        <v-col class="text-center">
            <!-- <h1 class="GmarketSansFont">현지 구매</h1> -->
            <h2 style="color: #BDBDBD;">현지 구매</h2>
            <h2>￦ {{ finalPrice.localPurchase.priceKrw }}</h2>
            <h2>￥ {{ finalPrice.localPurchase.priceJpy }}</h2>
            <h2>$ {{ finalPrice.localPurchase.priceUsd }}</h2>
        </v-col>

        <v-divider vertical></v-divider>
        <v-divider vertical></v-divider>
        <v-divider vertical></v-divider>

        <v-col class="text-center"> 
            <h2 style="color: #BDBDBD;">직구</h2>
            <h2>￦ {{ finalPrice.directPurchase.priceKrw }}</h2>
            <h2>￥ {{ finalPrice.directPurchase.priceJpy }}</h2>
            <h2>$ {{ finalPrice.directPurchase.priceUsd }}</h2>
        </v-col>
    </v-row>
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
            localPurchase: {
                priceKrw: 0,
                priceUsd: 0,
                priceJpy: 0
            },
            directPurchase: {
                priceKrw: 0,
                priceUsd: 0,
                priceJpy: 0
            },

            
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
            const sanitizedInput = String(this.inputJPYCost).replace(/[^0-9]/g, ""); 
            const numericInput = parseFloat(sanitizedInput);
            
            //numericInput는 JPY
            let localPriceUsd = numericInput * this.latestCurrency.currency.JPY.USD
            let directPriceUsd = localPriceUsd;

            if (this.costOption.includes("isTaxFreeApplied")) { //택스프리
                //this.finalPrice.priceJpy = guitarCostCalculator.calculateTaxFreePrice(this.finalPrice.priceJpy)
                //calculateTaxFreePrice 택스 프리는 일본에서 처리하기 때문에 JPY로 계산 USD -> JPY 해서 보냄
                localPriceUsd = guitarCostCalculator.calculateTaxFreePrice(localPriceUsd * this.latestCurrency.currency.USD.JPY) * this.latestCurrency.currency.JPY.USD;
            }

            if (this.costOption.includes("isDutyApplied")) { //관세 부가
                
                let localDutyUsd = guitarCostCalculator.calculateDuty(localPriceUsd, 800);
                let directDutyUsd = guitarCostCalculator.calculateDuty(localPriceUsd, 150);

                directPriceUsd += directDutyUsd
                if (this.costOption.includes("isDutyDiscountApplied")) { //관세 감면
                    //관세 감면은 한도가 20만원이기 때문에 KRW로 계산함 USD -> KRW 으로 보냄
                    console.log(guitarCostCalculator.calculateDutyReduction(localDutyUsd * this.latestCurrency.currency.USD.KRW))
                    localDutyUsd -= guitarCostCalculator.calculateDutyReduction(localDutyUsd * this.latestCurrency.currency.USD.KRW) * this.latestCurrency.currency.KRW.USD;
                    localPriceUsd += localDutyUsd
                }

                else {
                    //감세 감면 비활성화 시
                    localPriceUsd += localDutyUsd
                }
            }

            else {
                this.costOption = this.costOption.filter(option => option !== "isDutyDiscountApplied");
            }

        
            if (this.costOption.includes("isVATApplied")) {
                this.finalPrice.priceUsd = guitarCostCalculator.calculateGuitarVAT(this.finalPrice.priceUsd)
                //부가세도 USD로 계산함
                localPriceUsd = guitarCostCalculator.calculateGuitarVAT(localPriceUsd, 800);
                directPriceUsd = guitarCostCalculator.calculateGuitarVAT(directPriceUsd, 150);
            }


            //여기도 수정
            this.finalPrice.directPurchase.priceUsd = this.formatPrice(directPriceUsd);
            this.finalPrice.directPurchase.priceKrw = this.formatPrice(directPriceUsd * this.latestCurrency.currency.USD.KRW);
            this.finalPrice.directPurchase.priceJpy = this.formatPrice(directPriceUsd * this.latestCurrency.currency.USD.JPY);

            this.finalPrice.localPurchase.priceUsd = this.formatPrice(localPriceUsd);
            this.finalPrice.localPurchase.priceKrw = this.formatPrice(localPriceUsd * this.latestCurrency.currency.USD.KRW);
            this.finalPrice.localPurchase.priceJpy = this.formatPrice(localPriceUsd * this.latestCurrency.currency.USD.JPY);
            
            // this.finalPrice.priceUsd = this.formatPrice(localPriceUsd)
            // this.finalPrice.priceKrw = this.formatPrice(localPriceUsd * this.latestCurrency.currency.USD.KRW)
            // this.finalPrice.priceJpy = this.formatPrice(localPriceUsd * this.latestCurrency.currency.USD.JPY)
        },
    },

}
</script>

<style scoped>

.portfolio-card {
    min-width: 35%;
    text-align: center;
    max-width: 45%;
}

.inline-card {
display: inline;
margin: 10%;
}

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.GmarketSansFont {
    font-family: 'GmarketSansMedium', sans-serif;
}
</style>