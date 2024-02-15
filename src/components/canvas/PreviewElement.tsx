import { observer } from 'mobx-react-lite'
import { ReactNode, useMemo } from 'react'
import { ElementType, initOptions } from '../../interfaces/element'
import canvasStore from '../../store/canvasStore'
import './PreviewElement.css'

type Props = {
  children: ReactNode
  elementId: ElementType
  initialPosition: {
    x: number
    y: number
  }
}

const PreviewElement = observer(
  ({ children, elementId, initialPosition }: Props) => {
    const { getOptions } = canvasStore

    const elementOptions = useMemo(() => {
      return getOptions(elementId)
    }, [elementId, getOptions])

    const showOutline =
      elementOptions?.y !== initOptions.y ||
      elementOptions.x !== initOptions.x ||
      elementOptions.scale !== initOptions.scale

    return (
      <>
        <div
          className={
            'preview-element' +
            (showOutline ? ' preview-element-outline' : '')
          }
          style={{
            top: `${(elementOptions?.y ?? 0) + initialPosition.y}px`,
            left: `${(elementOptions?.x ?? 0) + initialPosition.x}px`,
            transform: `scale(${elementOptions?.scale})`,
          }}
        >
          <div
            style={{
              opacity: `${elementOptions?.opacity ?? 1}`,
              filter: `blur(${elementOptions?.blur}px)`,
            }}
          >
            {children}
          </div>
        </div>
      </>
    )
  },
)

export default PreviewElement
