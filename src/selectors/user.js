// eslint-disable-next-line import/prefer-default-export
export const userFirstNameSelector = state => {
  if (state.userInfo.user.data) {
    return state.userInfo.user.data.applicant.firstname
  }
  return ''
}
