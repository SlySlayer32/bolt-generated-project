import apiClient from './ApiClient';

    export const login = (credentials) => apiClient.post('/users/login', credentials);
    export const register = (userDetails) => apiClient.post('/users/register', userDetails);
