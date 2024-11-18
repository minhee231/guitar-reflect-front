<template>
  <v-app>
    <v-main>
      <GuitarCalc :latestCurrency="latestCurrency"/>
      <!-- {{ latestCurrency }} -->
    </v-main>
  </v-app>
</template>

<script>
import GuitarCalc from './components/GuitarCalc.vue';
import currencyService from './service/currency-service';

export default {
  name: 'App',

  components: {
    GuitarCalc,
  },

  data: () => ({
    latestCurrency : {}
  }),

  methods: {
    async getLatestCurrency() {
      const response  = await currencyService.getLatestCurrency();
      console.log(response);
      this.latestCurrency = response.data;
    }
  },

  created() {
    this.getLatestCurrency();
  }
}
</script>
