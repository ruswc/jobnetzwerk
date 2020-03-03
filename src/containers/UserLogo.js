import { connect } from 'react-redux'

import { isAuthenticatedSelector } from '../selectors/auth'
import { userFirstNameSelector } from '../selectors/user'

import UserLogo from '../components/HeaderSecondary/UserLogo'

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
  userFirstName: userFirstNameSelector(state)
})

export default connect(mapStateToProps)(UserLogo)
