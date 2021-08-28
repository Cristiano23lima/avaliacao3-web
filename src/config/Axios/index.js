import axios from "axios";

const baseURL = "https://backend-blog-trab2.herokuapp.com";

export default axios.create({
    baseURL: baseURL
});