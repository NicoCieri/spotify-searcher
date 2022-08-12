import { forwardRef } from 'react'
import { SearchButton, SearchInput, SearchWrapper } from './styled'
import { BsSearch } from 'react-icons/bs'

interface iSearchBar {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const SearchBar = forwardRef<HTMLInputElement, iSearchBar>(({ value, onChange, onSubmit }, ref) => {
  return (
    <form onSubmit={onSubmit}>
      <SearchWrapper>
        <SearchInput
          type='search'
          onChange={onChange}
          placeholder='Search by artists'
          ref={ref}
          value={value}
          autoFocus
        />

        <SearchButton type={'submit'}>
          <BsSearch />
        </SearchButton>
      </SearchWrapper>
    </form>
  )
})

export default SearchBar
