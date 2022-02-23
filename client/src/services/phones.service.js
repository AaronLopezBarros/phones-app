import axios from "axios";
//Creamos el servicio para llamar al servidor y recibir la data
const phonesService = axios.create({
    baseURL: "http://localhost:5005/api"
})

const getAllPhones = () => {
    return phonesService.get("/phones")
}

export default getAllPhones;