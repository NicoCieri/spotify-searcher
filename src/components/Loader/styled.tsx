import styled, { keyframes } from 'styled-components'

const loadingSpinner = keyframes`
  from {
    transform: rotate(0deg);   transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg); transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;

  div {
    width: 40px;
    height: 40px;
    border: solid 4px transparent;
    border-top-color: #006f63;
    border-left-color: #006f63;
    border-radius: 50%;
    animation: ${loadingSpinner} 400ms linear infinite;
  }
`
