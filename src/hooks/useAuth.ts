import { useEffect } from 'react'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { getCredentialParams, getExpirationTime } from 'resources/utils'

export const useAuth = () => {
  const [token, setToken] = useLocalStorage('token')
  const [expirationTime, setExpirationTime] = useLocalStorage('expirationTime', null)

  useEffect(() => {
    if (!token && window.location.hash) {
      const { access_token, expires_in } = getCredentialParams(window.location.hash)
      const expiryTime = getExpirationTime(Number(expires_in))
      window.location.hash = ''
      setExpirationTime(expiryTime)
      setToken(access_token)
    }
  }, [setExpirationTime, setToken, token])

  const login = () => {
    const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL, REACT_APP_REDIRECT_URL } = process.env
    window.location.href = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  const logout = () => {
    setToken('')
    setExpirationTime(null)
  }

  return {
    token,
    expirationTime,
    login,
    logout,
  }
}
