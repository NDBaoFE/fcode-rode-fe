import { get, post } from './ApiCaller'

const adminApi = {
  getRank: (id, token) => {
    const url = `/rank/${id}/500`

    return get(url, {}, { authorization: token })
  },
  getAllProblem: (token) => {
    const url = '/problem/all'

    return get(url, {}, { authorization: token })
  },
  createProblem: (token, body) => {
    const url = '/problem'

    return post(url, body, {}, { authorization: token })
  },
  getImage: (id, token) => {
    const url = `/image/${id}`

    return get(url, {}, { authorization: token })
  },
  getAlgoRank: (id, token) => {
    const url = `/algo/rank/${id}/500`

    return get(url, {}, { authorization: token })
  },
  getAlgoFile: (id, token) => {
    const url = `/algo/file/${id}`

    return get(url, {}, { authorization: token })
  },
  createAlgo: (body, token) => {
    const url = '/algo'

    return post(url, body, {}, { authorization: token })
  },
}
export default adminApi
