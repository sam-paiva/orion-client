import axios from 'axios';
import { CreateImmobileRequest } from '../../shared/requests/create-immobile.request';
import { CreateUserRequest } from '../../shared/requests/create-user.request';
import { AuthResponse } from '../../shared/responses/auth.response';
import { getAccessToken } from './auth.service';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => {
    if (!config.headers!.Authorization) {
      config.headers!.Authorization = `Bearer ${getAccessToken()}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (email: string, password: string) => {
  const request = {
    email,
    password,
  };
  return api.post<AuthResponse>('/users/login', request);
};

export const createAccount = async (request: CreateUserRequest) => {
  return api.post('/users/create-user', request);
};

export const getProperties = async () => {
  return api.get('/properties');
};

export const createImmobile = async (request: CreateImmobileRequest) => {
  return api.post('/properties', request);
};
