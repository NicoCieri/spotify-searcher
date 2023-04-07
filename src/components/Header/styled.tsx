import styled from 'styled-components'

export const StyledHeader = styled.div<{ loggedIn?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.loggedIn ? 'space-between' : 'center')};
  padding: 10px 0;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
`
