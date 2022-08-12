import styled from 'styled-components'

export const ArtistCard = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  /* border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1); */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
`

export const Row = styled.div`
  display: block;
  margin-bottom: 10px;
`

export const Genre = styled.span`
  display: inline-block;
  padding: 2px 10px;
  margin: 0 5px 5px;
  font-size: 13px;
  background: red;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Description = styled.div`
  padding: 0 10px;
  font-size: 14px;
`

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  min-width: 100px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
`
