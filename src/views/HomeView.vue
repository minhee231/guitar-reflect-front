<template>
  <v-container fluid class="d-flex align-center" style="height: 80vh;">
    <v-row>
      <v-col cols="3">
      </v-col>
      <v-col cols="6">
        <GuitarCalc :latestCurrency="latestCurrency" style="margin: 30px 0;"/>
        <GuitarCalcDescription class="GuitarCalcDescription" />
      </v-col>
      <v-col cols="3">
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
  