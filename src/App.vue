<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      {{ latestCurrency }}
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import currencyService from './service/currency-service';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    latestCurrency : {}
  }),

  methods: {
    async getLatestCurrency() {
      const response  = await currencyService.getLatestCurrency();
      console.log(response);
      this.latestCurrency = response;
    }
  },

  created() {
    this.getLatestCurrency();
  }
}
</script>
