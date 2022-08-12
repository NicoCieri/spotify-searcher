export interface CredentialParams {
  access_token?: string
  token_type?: string
  expires_in?: string
}

export type Image = {
  width: 640
  height: number
  url: string
}

export type Followers = {
  href: string | null
  total: number
}

export type ExternalUrls = {
  spotify: string
}

export interface Artist {
  images: Image[]
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  name: string
  popularity: number
  type: 'artist'
  uri: string
}
