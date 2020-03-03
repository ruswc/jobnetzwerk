import { connect } from 'react-redux'

import { isAuthenticatedSelector } from '../selectors/auth'
import { userFirstNameSelector } from '../selectors/user'

import HeaderSecondary from '../components/HeaderSecondary/HeaderSecondary'

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
  userFirstName: userFirstNameSelector(state)
})

export default connect(mapStateToProps)(HeaderSecondary)
