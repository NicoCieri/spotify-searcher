import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || initialValue)
    } catch (error) {}
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {}
  }

  return [storedValue, setValue]
}
