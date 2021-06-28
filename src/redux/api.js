import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000/data'
})


export const booksApi = {
    getBooks() {
        return instance.get('/data.json')
    }
}
