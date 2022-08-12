import { useState, useRef } from 'react'
import axios from 'axios'
import NoResults from 'components/NoResults'
import SearchBar from 'components/SearchBar'
import ArtistList from 'components/ArtistList'
import Loader from 'components/Loader'
import { Wrapper } from './styled'

interface iSearcher {
  token: string
  checkIfSessionIsValid: () => boolean
  onInvalidSession: () => void
}

const Searcher = ({ token, onInvalidSession, checkIfSessionIsValid }: iSearcher) => {
  const [searchKey, setSearchKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [lastSearch, setLastSearch] = useState('')
  const [artists, setArtists] = useState([])

  const inputRef = useRef<HTMLInputElement>(null)

  const resetSearch = () => {
    setSearchKey('')
    setLastSearch('')
    setArtists([])
    setIsLoading(false)
    inputRef.current?.focus?.()
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchKey(e.target.value)
  }

  const searchArtists = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!searchKey.length) {
      resetSearch()
      return
    }

    if (!checkIfSessionIsValid()) {
      onInvalidSession()
      return
    }

    setLastSearch(searchKey)
    setIsLoading(true)
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
        limit: 30,
      },
    })

    setArtists(data.artists.items)
    setIsLoading(false)
  }

  return (
    <>
      <SearchBar value={searchKey} onSubmit={searchArtists} onChange={handleSearchChange} ref={inputRef} />

      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!!artists.length && <ArtistList artists={artists} />}
            {!artists.length && lastSearch && <NoResults query={lastSearch} handleAction={resetSearch} />}
          </>
        )}
      </Wrapper>
    </>
  )
}

export default Searcher
