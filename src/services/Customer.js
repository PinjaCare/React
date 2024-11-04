import axios from "axios";

const baseUrl = "https://localhost:7073/api/Customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
 export default { getAll }