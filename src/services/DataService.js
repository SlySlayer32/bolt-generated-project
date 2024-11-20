import apiClient from './ApiClient';

    export const fetchBookings = () => apiClient.get('/bookings/list');
    export const createBooking = (bookingData) => apiClient.post('/bookings/create', bookingData);
