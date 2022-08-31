import axios from "axios"

export const Api = () => {

    return axios.create({
        baseURL: 'http://localhost:3333'
    }); //Será criada uma instância para realizarmos uma consulta HTTP.
}