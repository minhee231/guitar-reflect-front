<template>
    <v-text-field 
        label="디지마트 주소 입력"
        v-model="inputLinkField"
        @input="validateDigiMartLink"
        :loading="isLoading"
    >
    </v-text-field>
</template>

<script>
import guitarStoreService from '@/service/guitar-store-service';

export default {
    name: "LinkReceiver",
    data: () => ({
        inputLinkField: "",
        isLoading: false
    }),
    methods: {
        async getGuitarPrice() {
            this.isLoading = true;
            const response = await guitarStoreService.getGuitarPrice({"url": this.inputLinkField});
            const data = response.data
            const price = data.body.price;
            this.$emit("guitarPrice", price)
            this.isLoading = false;
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
