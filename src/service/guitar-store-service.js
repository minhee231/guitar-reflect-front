import apiClient from "./api";
const urlPrefix = "guitar-store"

export default {
    getGuitarPrice(guitarUrl) {
        return apiClient.post(`${urlPrefix}/digimart-price`, guitarUrl)
    }
}