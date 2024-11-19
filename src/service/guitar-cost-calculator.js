export default {
    convertCurrency(amount, exchangeRate) {
        return amount * exchangeRate;
    },

    calculateGuitarVAT(guitarCost) {
        return guitarCost * 1.1;
    },
    
    calculateGuitarDuty(guitarCostUsd) {
        let finalCost = guitarCostUsd;
    
        if (guitarCostUsd > 800) {
            finalCost -= 800;
            finalCost *= 1.08;
        }
    
        return finalCost;
    },
    
    calculateTaxFreePrice(guitarCostJpy) {
        if (guitarCostJpy >= 5000 && guitarCostJpy <= 500000) {
            guitarCostJpy *= 0.9
        }

        return guitarCostJpy
    },
    
}