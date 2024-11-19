export default {
    convertCurrency(amount, exchangeRate) {
        return amount * exchangeRate;
    },

    calculateGuitarVAT(guitarCost) {
        return guitarCost * 1.1;
    },
    
    calculateDuty(guitarCostUsd) {
        let finalDuty = 0;
        if (guitarCostUsd > 800) {
            finalDuty = (guitarCostUsd - 800) * 0.08;
        }
        return finalDuty;
    },
    
    calculateTaxFreePrice(guitarCostJpy) {
        if (guitarCostJpy >= 5000 && guitarCostJpy <= 500000) {
            guitarCostJpy *= 0.9
        }

        return guitarCostJpy
    },

}