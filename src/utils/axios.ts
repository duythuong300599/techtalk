import Axios, { AxiosError, AxiosResponse } from 'axios';
// import Cookies from 'js-cookie';
import configs from './configs';

const axiosInstance = Axios.create({
  baseURL: configs.BASE_URL,
});
export const sendGet = (url: string, params?: object) => axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: object, queryParams?: object) => axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: object) => axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: object) => axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: object) => axiosInstance.delete(url, { params }).then((res) => res.data);
