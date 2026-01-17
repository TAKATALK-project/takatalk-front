import axios from 'axios';

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,

    withCredentials: true,

    headers: {
        'Content-Type' : 'application/json',
    },
});

// 인터셉터 설정
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API 에러 발생 : ', error.response?.data || error.message);
        return Promise.reject(error);
    }
);