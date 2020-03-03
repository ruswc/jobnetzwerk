import client from '../helpers/api'

export default {
  refreshToken: data =>
    client({
      url: '/refresh_token',
      method: 'PUT',
      data
    })
}
