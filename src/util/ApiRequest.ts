import axios from "axios";

export const ApiRequest = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_HOST
})