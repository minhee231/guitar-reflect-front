<template>
    <LinkReceiver/>
</template>

<script>
import LinkReceiver from '@/components/LinkReceiver.vue';

export default {
    name: "DigiMartView",
    components: {
        LinkReceiver,  
    },

    props: {
        latestCurrency: {
            type: Object,
            required: true
        },
    },
}

</script>
