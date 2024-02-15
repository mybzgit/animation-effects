import { useState } from 'react'
import { ElementType } from '../interfaces/element'

export const useCreateFocusContext = function () {
  const [focusId, setFocusId] = useState<ElementType>(null)

  return {
    focusId,
    setFocusId,
  }
}
