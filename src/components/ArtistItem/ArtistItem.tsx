import React from 'react'
import { Artist } from 'resources/types'
import { ArtistCard, Description, ImgWrapper, Genre, CardTitle, Row } from './styled'

interface iArtistItem {
  artist: Artist
  onClick: () => void
}

const ArtistItem = ({ artist, onClick }: iArtistItem) => {
  return (
    <ArtistCard onClick={onClick}>
      {artist.images.length ? (
        <ImgWrapper>
          <img width={'100%'} src={artist.images[0].url} alt='' />
        </ImgWrapper>
      ) : (
        <ImgWrapper>No Image</ImgWrapper>
      )}
      <Description>
        <CardTitle>{artist.name}</CardTitle>
        <Row>
          <b>Followers: </b>
          <span>{artist.followers.total}</span>
        </Row>
        {!!artist.genres.length && (
          <Row>
            <b>Genres: </b>
            {artist.genres.map((genre) => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </Row>
        )}
      </Description>
    </ArtistCard>
  )
}

export default ArtistItem
