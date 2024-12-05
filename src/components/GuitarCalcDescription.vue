<template>
  <!-- <v-carousel hide-delimiters height="110" cycle :show-arrows="false"> -->
  <v-carousel hide-delimiters height="200" cycle :show-arrows="false">
    <v-carousel-item v-for="(item,index) in cardTitles" :key="index+'title'">
      <v-card class="custom-card" variant="outlined">
        <v-card-title>{{ item }}</v-card-title>
        <v-card-text>
        {{ cardText[index] }}
      </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "GuitarCalcDescrip",
  data: () => ({
    cardTitles: [
      "관세 면제 한도",
      "관세 적용",
      "관세 감면",
      "부가가치세",
      "일본 면세 한도",
    ],
    cardText: [ 
      "관세 면제 한도는 직구의 경우 150달러, 현지 구매의 경우 800달러입니다.",
      "관세는 면세 한도를 초과한 금액에 대해 8%가 부과됩니다.",
      "자진신고 시, 관세의 30%를 감면받을 수 있으며, 최대 20만원까지 감면 혜택을 받을 수 있습니다.",
      "부가가치세는 관세가 부과된 금액에 10%가 추가로 부과됩니다.",
      "5,000엔 이상 구매 시 면세 혜택을 받을 수 있으며, 면세 한도는 최대 500,000엔까지 적용됩니다.",
    ]
  }),
}
</script>

<style scoped>
.custom-card {
  min-height: 30%;
}
</style>