import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { Button } from '../styled'
import { Container } from './styled'

interface iNoResults {
  query: string
  handleAction: () => void
}

const NoResults = ({ query, handleAction }: iNoResults) => {
  return (
    <Container>
      <BsFillExclamationCircleFill />
      <p>
        Sorry, we couldn't find any matches for <b>{query}</b>
      </p>
      <Button onClick={handleAction}>Try again</Button>
    </Container>
  )
}

export default NoResults
