<template>
    <GuitarCalc :latestCurrency="latestCurrency"/>
</template>

<script>
import GuitarCalc from '@/components/GuitarCalc.vue';

export default {
    name: "DigiMartView",
    components: {
      GuitarCalc,  
    },

    props: {
        latestCurrency: {
            type: Object,
            required: true
        },
    },
}

</script>
