import axios from "axios";

const baseUrl = "https://localhost:7073/api/Customers"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newCustomer => {
    return axios.post(baseUrl, newCustomer)                     //parametreinä url ja toisena olio mikä luodaan 
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (object) => {
    return axios.put(`${baseUrl}/${object.customerId}`, object)    //parametreinä url ja toisena olio mitä muokataan
}


export default { getAll, create, remove, update }