<template>
    <v-text-field 
        label="디지마트 주소 입력"
        v-model="inputLinkField"
        @input="validateDigiMartLink"
    >
    </v-text-field>
</template>

<script>
import guitarStoreService from '@/service/guitar-store-service';

export default {
    name: "LinkReceiver",
    data: () => ({
        inputLinkField: "",
    }),
    methods: {
        async getGuitarPrice() {
            const response = await guitarStoreService.getGuitarPrice({"url": this.inputLinkField});
            const data = response.data
            const price = data.body.price;
            console.log(price)
            this.$emit("guitarPrice", price)
        },

        validateDigiMartLink() {
            const digiMartPattern = /^(https?:\/\/)?(www\.)?digimart\.net\/([^\/]+\/){2,}([^\/]+\/?)?$/;

            if (digiMartPattern.test(this.inputLinkField)) {
                console.log("Valid DigiMart URL");
                this.getGuitarPrice()
                return true;
            } else {
                console.log("Invalid DigiMart URL");
                return false;
            }
        }
    }
};
</script>
