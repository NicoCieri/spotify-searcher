import { CredentialParams } from './types'

export const getCredentialParams = (url: string): CredentialParams => {
  return url
    .slice(1)
    .split('&')
    .reduce((acc, curr) => {
      const [key, value] = curr.split('=') as [keyof CredentialParams, string]
      if (key && value) acc[key] = value
      return acc
    }, {} as CredentialParams)
}

export const getExpirationTime = (expiryTime: number) => new Date().getTime() + Number(expiryTime) * 1000

export const isValidSession = (expiryTime: number) => new Date().getTime() < expiryTime
