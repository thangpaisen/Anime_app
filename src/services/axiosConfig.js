// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const axiosConfig = axios.create({
// .. where we make our configurations
    // baseURL: 'https://netime.glitch.me/api/v1'
    baseURL: 'http://localhost:3000/api/v1'
});

// // Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// // Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default axiosConfig;