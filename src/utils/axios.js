import axios from 'axios';
// config
import { apiUrl } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
