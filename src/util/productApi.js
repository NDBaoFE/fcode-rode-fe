import { post, get } from './ApiCaller'

const productApi = {
  login: (token) => {
    const url = '/auth/login'
    return post(url, { idToken: token }, {}, {})
  },
  startBattle: (id, token) => {
    const url = `/battle/start/${id}`
    return get(url, {}, { authorization: token })
  },
  getImage: (path, token) => {
    const url = `/image/${path}`
    return get(url, {}, { authorization: token })
  },
  submit: (token) => {
    const url = `/submit`
    return post(url, {}, {}, { authorization: token })
  },
  submitAlgorithm: (token, body) => {
    const url = '/algo/submit'

    return post(url, body, {}, { authorization: token })
  },
  getAlgo: (token, id) => {
    const url = `/algo/${id}`

    return get(url, {}, { authorization: token })
  },
}

export default productApi
