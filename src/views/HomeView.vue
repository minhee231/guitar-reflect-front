<template>
    <v-container fluid class="d-flex align-center" style="height: 80vh;"> <!-- 세로 중앙 정렬을 위해 전체 높이를 100vh로 설정 -->
      <v-row justify="center"  class="w-100">
        <v-col cols="3" class="d-flex align-center justify-center text-center">
          <GuitarCalcDescription class="GuitarCalcDescription" />
        </v-col>
        <v-col cols="6" class="text-center">
          <GuitarCalc :latestCurrency="latestCurrency" />
        </v-col>
        <v-col cols="3" class="text-center">
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import GuitarCalc from '@/components/GuitarCalc.vue';
  import GuitarCalcDescription from '@/components/GuitarCalcDescription.vue';
  
  export default {
    name: "HomeView",
    components: {
      GuitarCalc,
      GuitarCalcDescription,
    },
  
    props: {
      latestCurrency: {
        type: Object,
        required: true
      },
    },
  }
  </script>
  
  <style>
  .GuitarCalcDescription {
    max-width: 100%;
    display: block;
    min-width: 30%;
  }
  </style>
  