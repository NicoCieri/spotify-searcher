import toast, { Toaster } from 'react-hot-toast'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import { useAuth } from 'hooks/useAuth'
import { isValidSession } from 'resources/utils'
import GlobalStyle from 'GlobalStyles'
import { Layout, Container } from 'components/styled'
import Header from 'components/Header'
import Searcher from 'scenes/Searcher'
import Login from 'scenes/Login'

function App() {
  const { token, expirationTime, login, logout } = useAuth()

  const notify = () =>
    toast('Token expired, please login again.', {
      position: 'bottom-right',
      icon: <BsFillExclamationTriangleFill />,
    })

  const checkValidSession = (expirationTime: number) => () => isValidSession(expirationTime)

  const onInvalidSession = () => {
    notify()
    logout()
  }

  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Layout>
        <Container>
          <Header loggedIn={!!token} handleLogout={logout} />

          {!token ? (
            <Login handleLogin={login} />
          ) : (
            <Searcher
              token={token}
              onInvalidSession={onInvalidSession}
              checkIfSessionIsValid={checkValidSession(expirationTime)}
            />
          )}
        </Container>
      </Layout>
    </>
  )
}

export default App
