import axios from 'axios';

const apiClient = axios.create({
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
    },
});

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };