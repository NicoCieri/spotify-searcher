import styled from 'styled-components'

export const SearchButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 0;
  height: 40px;
  width: 60px;
  cursor: pointer;
  font-size: 20px;
  color: #000;
`

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 100px;
  border: none;
  height: 40px;
  padding: 0 16px;
  font-size: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 40px;
`
