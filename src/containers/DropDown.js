import { connect } from 'react-redux'

import { isAuthenticatedSelector } from '../selectors/auth'
import { userFirstNameSelector } from '../selectors/user'
import { signOut } from '../actions/auth'

import Dropdown from '../components/Header/DropDown'

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
  userFirstName: userFirstNameSelector(state)
})

const mapDispatchToProps = {
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
