import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  background-image: linear-gradient(to right top, #6327cf, #0cdf9c);
  height: 100vh;
  overflow: auto;
`

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
`

export const Button = styled.button`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 8px 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    margin-left: 10px;
    font-size: 18px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`

export const MessageBox = styled.div`
  padding: 30px 40px;
  margin: 80px auto 0;
  width: 500px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  h2 {
    margin-top: 0px;
  }

  ${Button} {
    margin: 20px auto 0;
  }
`
