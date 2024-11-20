import axios from 'axios';

    const apiClient = axios.create({
      baseURL: 'https://api.cleanconnect.com',
      timeout: 10000,
    });

    export default apiClient;
