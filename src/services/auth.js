import client from '../helpers/api'

export default {
  signIn: data =>
    client({
      url: '/login',
      method: 'POST',
      data
    })
}
