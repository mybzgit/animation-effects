import { ReactNode, useCallback, useContext } from 'react'
import { FocusContext } from '../../context/FocusContextProvider'
import { ElementType } from '../../interfaces/element'
import './Focusable.css'

type Props = {
  children: ReactNode
  elementId: ElementType
  initialPosition: {
    x: number
    y: number
  }
}

const Focusable = ({
  children,
  elementId,
  initialPosition,
}: Props) => {
  const { focusId, setFocusId } = useContext(FocusContext)

  const onClick = useCallback(() => {
    setFocusId(elementId)
  }, [elementId, setFocusId])

  const nodeClass =
    elementId == focusId ? 'focusable-element-node' : ''

  return (
    <div
      className={elementId == focusId ? ' focusable-element' : ''}
      onClick={onClick}
      style={{
        position: 'absolute',
        top: `${initialPosition.y}px`,
        left: `${initialPosition.x}px`,
      }}
    >
      <span className={nodeClass}></span>
      <span className={nodeClass}></span>
      <span className={nodeClass}></span>
      <span className={nodeClass}></span>
      {children}
    </div>
  )
}

export default Focusable
