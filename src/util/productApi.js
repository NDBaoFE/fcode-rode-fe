import { post } from './ApiCaller'

const productApi = {
  login: (token) => {
    const url = '/auth/login'
    return post(url, { idToken: token }, {}, {})
  },
}

export default productApi
