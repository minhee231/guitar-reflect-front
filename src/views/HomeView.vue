<template>
    <v-container>
        <GuitarCalc :latestCurrency="latestCurrency"/>
        <GuitarCalcDescription class="text-center GuitarCalcDescription "/>

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
    margin:50px auto 0; 
    max-width: 20%;
    display: block;
}
</style>
