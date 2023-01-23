import axios from 'axios';
import { CreateUser } from '../dtos/CreateUser';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export async function createUser(user: CreateUser) {
  return api.post('/users', user)
}
