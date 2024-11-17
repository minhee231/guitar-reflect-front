import apiClient from "./api";
const urlPrefix = "currency"

export default {
    getLatestCurrency() {
        return apiClient.get(`${urlPrefix}/latest`)
    }
}