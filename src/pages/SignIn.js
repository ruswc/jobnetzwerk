import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { connect } from 'react-redux'

import { signIn } from '../actions/auth'
import { isLoadingSelector, authErrorsSelector } from '../selectors/auth'

import Container from '../components/Container'
import Form from '../components/Form'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  handleOnChangeLogin = ({ target: { value } }) =>
    this.setState({ username: value })

  handleOnChangePassword = ({ target: { value } }) =>
    this.setState({ password: value })

  handleOnSubmit = () => {
    const { onSubmit } = this.props
    const { username } = this.state
    const { password } = this.state

    if (
      !username ||
      username.length < 4 ||
      username.length > 30 ||
      password.length <= 0
    )
      return this.setState(() => ({ errorMessage: 'Field is not valid' }))

    onSubmit({ username, password })

    return true
  }

  render() {
    const {
      isLoading,
      errors: { message }
    } = this.props
    const { username, password, errorMessage } = this.state
    const isFailured =
      errorMessage.length !== 0 || (message && message.length !== 0)

    return (
      <Container className="h-100 d-flex align-items-center justify-content-center py-5">
        <Container.Col className="col-5 py-5">
          <Form onSubmit={this.handleOnSubmit}>
            <Form.FormGroup>
              <Form.Input
                value={username}
                placeholder="Username"
                onChange={this.handleOnChangeLogin}
                autocomplete="username"
              />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Input
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleOnChangePassword}
                autocomplete="current-password"
                max={0}
              />
              <Form.Hint
                show={isFailured}
                text={errorMessage || message}
                type="error"
              />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Button
                className="signin-button"
                color="primary"
                loading={isLoading}
                disabled={!username || !password}
                type="submit"
                block
              >
                Sign-In
              </Form.Button>
            </Form.FormGroup>
          </Form>
        </Container.Col>
      </Container>
    )
  }
}

SignIn.propTypes = {
  isLoading: PropsTypes.bool,
  onSubmit: PropsTypes.func.isRequired,
  errors: PropsTypes.shape({
    message: PropsTypes.string
  })
}

SignIn.defaultProps = {
  isLoading: false,
  errors: {}
}

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  errors: authErrorsSelector(state)
})

const mapDispatchToProps = {
  onSubmit: signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
