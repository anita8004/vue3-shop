import request from '../utils/request'

export const login = (payload) => request.post('/admin/signin', payload)