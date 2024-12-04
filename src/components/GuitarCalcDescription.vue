<template>
    <v-card
      v-for="(item, index) in cardTitles"
      :key="index"
      variant="outlined"
      class="mb-4"
    >
      <v-card-title>{{ item }}</v-card-title>
      <v-card-text>
        {{ cardText[index] }}
      </v-card-text>
    </v-card>
</template>
<!-- https://play.vuetifyjs.com/#eNp9Uk1r3DAQ/StCpwTWdmFbCmaz9IMc2kNb2t6iHBR71qusVhLS2N5l8X/PWP6IE0LAGPnNG703z3N34cEX2Vfn0qYGnvMNwtFpibAVhrFNk0jnWKFlCDeCP1RJ5eGclNIfwCQfBY+syGuVKW3LmuRoS9BEHgDBWdjbNpHe2zaM9EVDokiQunbWU49hyjANpsI9NeYHOPfgLDN2FtKXrJFeSYNUtzVqZaB8QZuJCSrUsL1cmGFdt8leoItrx8KzQwIWFqdBZ3TIhz4pIDpvskVw9BkKrxxGEpyc9chK2MlaI7sMN5USZc6urtnNll2NGBtnz9l6NSGDWs4+jEh3HQ9dLzmL8BXHUFizU1X6GKyhHxmvFLywR6c0+N8OlTVB8HwyILjU2rY/I4a+hlGAevZQHN7AH8OpxwT/4yGAb0DwuYbSV4BD+fbfLzjReS7SStSa2O8U/0Kwuu49DrRvtSnJ9oIX3f449lkqU/0PtycEE6aheqMxl8gXnLb5+zujP9tdp+sxT3ooR1qlQ3gdYojdd4LvEV3Is6woDXFo0VXjUwOYGXfMSBPV7vxlnX5OP2WlCjhBiZYPIY3X3A9C3crUWsfX/RPGuSJW -->
<script>
export default {
  name: "GuitarCalcDescrip",
  data: () => ({
    cardTitles: [
      "관세",
      "관세 감면",
      "부가가치세",
      "택스프리/리펀",
    ],
    cardText: [
      "관세 면제 한도는 직구: 150달러, 현지 구매: 800달러입니다.",
      "내용2",
      "내용3",
    ]
  }),
}
</script>