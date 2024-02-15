import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
} from 'react'
import { useCreateFocusContext } from './FocusContext'
import { ElementType } from '../interfaces/element'

export const FocusContext = createContext({
  focusId: null as ElementType,
  setFocusId: (() => {}) as Dispatch<SetStateAction<ElementType>>,
})

type Props = {
  children: ReactNode
}

export const FocusContextProvider = ({ children }: Props) => {
  const context = useCreateFocusContext()
  return (
    <FocusContext.Provider
      value={{
        focusId: context.focusId,
        setFocusId: context.setFocusId,
      }}
    >
      {children}
    </FocusContext.Provider>
  )
}
