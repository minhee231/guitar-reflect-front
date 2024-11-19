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
    
    
    
}