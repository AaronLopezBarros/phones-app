import axios from "axios";

const phonesService = axios.create({
    baseURL: "http://localhost:5005/api"
})

const getAllPhones = () => {
    return phonesService.get("/phones")
}

export default getAllPhones;