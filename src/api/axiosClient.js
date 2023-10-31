import axios from "axios";
import { STATIC_HOST } from "../constants";

const axiosClient = axios.create({
    baseURL: `${STATIC_HOST}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJjZTM2NjQ1MGNkNjlhYTliNGY4NjEiLCJpYXQiOjE2OTg3MjEyMjgsImV4cCI6MTY5ODcyMTgyOCwidHlwZSI6ImFjY2VzcyJ9.-RDt4EvFdL989UkhvHBPAu0KClvm6mMBDwrC2qp0GE8'
    }
});

// Interceptor

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient;