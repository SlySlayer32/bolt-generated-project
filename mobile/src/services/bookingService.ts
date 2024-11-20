import apiClient from './api';

    export const fetchBookings = () => apiClient.get('/bookings/list');
    export const createBooking = (bookingData) => apiClient.post('/bookings/create', bookingData);
