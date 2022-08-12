import { BsBoxArrowRight } from 'react-icons/bs'
import { Button } from 'components/styled'
import { Title, StyledHeader } from './styled'

interface iHeader {
  loggedIn: boolean
  handleLogout: () => void
}

const Header = ({ loggedIn, handleLogout }: iHeader) => {
  return (
    <StyledHeader loggedIn={loggedIn}>
      <Title>Artists Searcher</Title>
      {loggedIn && (
        <Button onClick={handleLogout}>
          Logout <BsBoxArrowRight />
        </Button>
      )}
    </StyledHeader>
  )
}

export default Header
