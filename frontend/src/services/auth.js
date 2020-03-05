import { post } from './api';

export const authenticate = (login, password) => post('auth', { login, password })
