import axios from "axios";
import { getToken } from "../auth";

const baseURL = "https://backend-blog-trab2.herokuapp.com";

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'content-type': "application/json"
    }
});


api.interceptors.request.use(async config => {
    const token = getToken();

    if(!!token){
        config.headers.Authorization = token;
    }

    return config;
});

export default api;