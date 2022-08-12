import ArtistItem from 'components/ArtistItem'
import { Artist } from 'resources/types'

interface iArtistList {
  artists: Artist[]
}

const ArtistList = ({ artists }: iArtistList) => {
  const handleClick = (artist: Artist) => () => {
    window.open(artist.external_urls.spotify)
  }

  return (
    <>
      {artists.map((artist: Artist) => (
        <ArtistItem key={artist.id} artist={artist} onClick={handleClick(artist)} />
      ))}
    </>
  )
}

export default ArtistList
