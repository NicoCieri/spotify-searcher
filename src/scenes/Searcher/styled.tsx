import styled from 'styled-components'

export const Wrapper = styled.div<{ withTabs?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 162px;
  border-radius: ${(props) => (props.withTabs ? '0 10px 10px 10px' : '10px')};
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(255, 255, 255, 0.5) inset;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  padding: 15px 15px 0;
  margin: 10px 0;
  z-index: 1;
`
