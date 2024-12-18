<template>
    <v-text-field 
        label="디지마트 주소 입력"
        v-model="inputLinkField"
        @input="validateDigiMartLink"
    >
    </v-text-field>
</template>

<script>
export default {
    name: "LinkReceiver",
    data: () => ({
        inputLinkField: "",
    }),
    methods: {
        validateDigiMartLink() {
            const digiMartPattern = /^(https?:\/\/)?(www\.)?digimart\.net\/([^\/]+\/){2,}([^\/]+\/?)?$/;

            if (digiMartPattern.test(this.inputLinkField)) {
                console.log("Valid DigiMart URL");
                return true;
            } else {
                console.log("Invalid DigiMart URL");
                return false;
            }
        }
    }
};
</script>
