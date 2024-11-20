<template class="bg-grey-darken-4">
  <v-app class="bg-grey-darken-4">
    <v-main class="bg-grey-darken-4">
      <!-- <GuitarCalc :latestCurrency="latestCurrency"/> -->
      <!-- {{ latestCurrency }} -->
      <mainHeader class="main-header" />
      <router-view class="content" :latestCurrency="latestCurrency"/>
    </v-main>
  </v-app>
</template>

<script>
import GuitarCalc from './components/GuitarCalc.vue';
import currencyService from './service/currency-service';
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'App',

  components: {
    MainHeader,
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

<style>
.content {
  margin-top: 60px;
  padding: 20px;
}
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
}


#app {
  background-color: #616161; /* 원하는 배경색 */
  min-height: 100vh; /* 배경이 화면 전체를 덮도록 설정 */
}
</style>
