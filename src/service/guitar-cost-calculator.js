export default {
    convertCurrency(amount, exchangeRate) {
        return amount * exchangeRate;
    },

    calculateGuitarVAT(guitarCost) {
        if (guitarCostUsd > 800) {
            return guitarCost * 1.1;
        }
        else return guitarCost
    },
    
    calculateDuty(guitarCostUsd) {
        let finalDuty = 0;
        if (guitarCostUsd > 800) {
            finalDuty = (guitarCostUsd - 800) * 0.08;
        }

        console.log("::::"+guitarCostUsd + ":"+finalDuty)
        return finalDuty;
    },
    
    calculateTaxFreePrice(guitarCostJpy) {
        if (guitarCostJpy >= 5000 && guitarCostJpy <= 500000) {
            guitarCostJpy *= 0.9
        }

        return guitarCostJpy
    },

    calculateDutyReduction(dutyKRW) {
        let reducedDuty  = dutyKRW *= 0.7

        if (reducedDuty  > 200000) {
            reducedDuty  = 200000;
        }

        return reducedDuty 
    }
}