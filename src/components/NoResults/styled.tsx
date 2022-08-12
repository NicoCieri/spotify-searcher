import styled from 'styled-components'
import { Button } from '../styled'

export const Container = styled.div`
  width: 500px;
  max-width: 100%;
  text-align: center;
  margin: 0 auto 20px;
  padding: 20px 0 15px;

  ${Button} {
    margin: 20px auto 0;
  }

  svg {
    display: block;
    margin: 0 auto 20px;
    font-size: 60px;
  }
`
