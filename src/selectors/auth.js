export const isAuthenticatedSelector = state => state.auth.isAuthenticated

export const isLoadingSelector = state => state.auth.isLoading

export const authErrorsSelector = state => state.auth.errors

export const userSelector = state => state.auth.user

export const authTokenSelector = state => state.auth.tokens.accessTokenValue
export const authRefreshTokenSelector = state =>
  state.auth.tokens.refreshTokenValue
export const expiresInTokenSelector = state => state.auth.tokens.expiresInValue
