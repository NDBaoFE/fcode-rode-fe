import { post, get } from './ApiCaller'

const productApi = {
  login: (token) => {
    const url = '/auth/login'
    return post(url, { idToken: token }, {}, {})
  },
  getProblem: (token) => {
    const url = '/problem/all'
    return get(url, {}, { authorization: token })
  },
}

export default productApi
