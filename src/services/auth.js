import client from '../helpers/api'

export default {
  signIn: data =>
    client({
      url: '/jobnetzwerk/#/login',
      method: 'POST',
      data
    })
}
