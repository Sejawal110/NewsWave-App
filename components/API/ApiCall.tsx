import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const APIKEY = '?country=us&apiKey=&apiKey=4f0fb2df2b4247aabf5f97478a749be4'


const getCategory=(category: any)=>api.get('/everything?q='+category+'&apiKey=4f0fb2df2b4247aabf5f97478a749be4');

export default {

    getCategory
}