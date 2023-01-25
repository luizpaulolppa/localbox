import axios from 'axios';
import { AuthResponse } from '../dtos/AuthResponse';
import { CreateUser } from '../dtos/CreateUser';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export async function auth(email: string, password: string) {
  return api.post<AuthResponse>('/auth', { email, password })
}

export async function createUser(user: CreateUser) {
  return api.post('/users', user)
}
