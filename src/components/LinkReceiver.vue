<template>
    <v-text-field 
        label="디지마트 주소 입력"
        v-model="inputLinkField"
        @input="validateDigiMartLink"
        :loading="isLoading"
        :error-messages="errorMessage ? [errorMessage] : []"
    >
    </v-text-field>
</template>

<script>
import guitarStoreService from '@/service/guitar-store-service';

export default {
    name: "LinkReceiver",
    data: () => ({
        inputLinkField: "",
        errorMessage: "",
        isLoading: false
    }),
    methods: {
        async getGuitarPrice() {
            this.isLoading = true;
            const response = await guitarStoreService.getGuitarPrice({"url": this.inputLinkField});
            const data = response.data
            const price = data.body.price;
            console.log(data);
            this.isLoading = false;
            this.$emit("guitarPrice", price)
            this.saveRecentViewedItems(this.inputLinkField ,data);
        },

        validateDigiMartLink() {
            const digiMartPattern = /^(https?:\/\/)?(www\.)?digimart\.net\/([^\/]+\/){2,}([^\/]+\/?)?$/;

            if (digiMartPattern.test(this.inputLinkField)) {
                console.log("Valid DigiMart URL");
                this.errorMessage = '';
                this.getGuitarPrice()
                return true;
            } else {
                console.log("Invalid DigiMart URL");
                this.errorMessage = '유효한 디지마트 주소를 입력해주세요';
                return false;
            }
        },

        saveRecentViewedItems(url, data) {
            let savedValue = JSON.parse(localStorage.getItem("latestProduct")) || [];
            savedValue.unshift({
                "photoUrl": data.body.photo_url,
                "url": url,
            });

            savedValue = savedValue.slice(0, 5);
            localStorage.setItem("latestProduct",JSON.stringify(savedValue));
        }
    }
};
</script>
