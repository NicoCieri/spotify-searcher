import { BsBoxArrowLeft } from 'react-icons/bs'
import { MessageBox, Button } from 'components/styled'

interface iLogin {
  handleLogin: () => void
}

const Login = ({ handleLogin }: iLogin) => {
  return (
    <MessageBox>
      <h2>Please login to start</h2>
      <Button onClick={handleLogin}>
        Login with Spotify <BsBoxArrowLeft />
      </Button>
    </MessageBox>
  )
}

export default Login
