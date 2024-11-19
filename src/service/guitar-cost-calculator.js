export default {
    jpyToKrw(jpy , krw) {
        return Math.floor(jpy * krw);
    },

    jpyToUsd(jpy, usd) {
        return Math.floor(jpy * usd);
    },

    krwToJpy(krw, jpy) {
        return Math.floor(krw * jpy);
    },

    krwToUsd(krw, usd) {
        return Math.floor(krw * usd);
    },

    usdToKrw(usd, krw) {
        return Math.floor(usd * krw);
    },

    usdToKrw(usd, jpy) {
        return Math.floor(usd * jpy);
    },
}