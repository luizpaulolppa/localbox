import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthResponse } from '../dtos/AuthResponse';
import { CreateFile } from '../dtos/CreateFile';
import { CreateUser } from '../dtos/CreateUser';

const baseURL = 'http://localhost:3001/api'

const api = axios.create({ baseURL })

api.interceptors.request.use(
  (config: any): AxiosRequestConfig => {
    const token = localStorage.getItem('@accessToken')
    if (token && config.headers) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    config.headers['Content-Type'] = 'application/json';
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (config) => config,
  (error: any) => {
    const response = error.response
    if (response.status === 401) {
      localStorage.clear()
      return window.location.replace('/')
    }
    return Promise.reject(error)
  }
)

export async function auth(email: string, password: string) {
  return axios.post<AuthResponse>(baseURL + '/auth', { email, password })
}

export async function createUser(user: CreateUser) {
  return axios.post(baseURL + '/users', user)
}

export async function createNewFolder(data: CreateFile) {
  return api.post('/files', data)
}

export async function listFiles(parentId?: number) {
  const queryParentId = parentId || ''
  return api.get(`/files?parentId=${queryParentId}`)
}
