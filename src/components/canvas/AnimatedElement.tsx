import { ReactNode, useMemo } from 'react'
import { ElementType } from '../../interfaces/element'
import canvasStore from '../../store/canvasStore'

type Props = {
  children: ReactNode
  elementId: ElementType
  initialPosition: {
    x: number
    y: number
  }
}

const AnimatedElement = ({
  children,
  elementId,
  initialPosition,
}: Props) => {
  const { getOptions } = canvasStore

  const elementOptions = useMemo(() => {
    return getOptions(elementId)
  }, [elementId, getOptions])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          animationName: `anim-${elementId}`,
          animationDelay: `.${elementOptions?.delay}s`,
          animationDuration: `${elementOptions.speed}s`,
          animationIterationCount: elementOptions.replay
            ? 'infinite'
            : '1',
          animationTimingFunction: `${elementOptions.easing}`,
          animationFillMode: 'both'
        }}
      >
        {children}
      </div>
      <style>
        {`@keyframes anim-${elementId} {
          from, to {
            transform: translateY(${initialPosition.y}px) translateX(${initialPosition.x}px) scale(1);
            opacity: 1;
            filter: blur(0px);
          }
          50% {
            transform: translateY(${(elementOptions?.y ?? 0) + initialPosition.y}px) translateX(${(elementOptions?.x ?? 0) + initialPosition.x}px) scale(${elementOptions?.scale});
            opacity: ${elementOptions?.opacity ?? 1};
            filter: blur(${elementOptions?.blur}px);
          }
        }`}
      </style>
    </>
  )
}

export default AnimatedElement
