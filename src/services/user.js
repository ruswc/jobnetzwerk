import client from '../helpers/api'

export default {
  getUserInfo: () =>
    client({
      url: 'user/info',
      method: 'GET'
    })
}
