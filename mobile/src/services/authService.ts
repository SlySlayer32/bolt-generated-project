import apiClient from './api';

    export const login = (credentials) => apiClient.post('/users/login', credentials);
    export const register = (userDetails) => apiClient.post('/users/register', userDetails);
