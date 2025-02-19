import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
});

axiosClient.interceptors.request.use((config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClient;