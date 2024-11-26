export default {
    convertCurrency(amount, exchangeRate) {
        return amount * exchangeRate;
    },

    calculateGuitarVAT(guitarCost, dutyFreeLimit) {
        if (guitarCost > dutyFreeLimit) {
            return guitarCost * 1.1;
        }
        else return guitarCost
    },
    
    calculateDuty(guitarCostUsd, dutyFreeLimit) {
        let finalDuty = 0;
        if (guitarCostUsd > dutyFreeLimit) {
            finalDuty = (guitarCostUsd - dutyFreeLimit) * 0.08;
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