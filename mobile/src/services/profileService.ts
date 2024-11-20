import apiClient from './api';

    export const fetchProfile = () => apiClient.get('/profile');
    export const updateProfile = (profileData) => apiClient.put('/profile', profileData);
