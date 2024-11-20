<template>
    <GuitarCalc :latestCurrency="latestCurrency"/>
</template>

<script>
import GuitarCalc from '@/components/GuitarCalc.vue';

export default {
    name: "HomeView",
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
