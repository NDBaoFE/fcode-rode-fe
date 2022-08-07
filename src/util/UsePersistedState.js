import { useState, useEffect } from 'react'

import LocalStorageUtils from './LocalStorageUtils'

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => LocalStorageUtils.getUser(key) || defaultValue)
  useEffect(() => {
    LocalStorageUtils.setItem(key, state)
  }, [key, state])
  return [state, setState]
}
