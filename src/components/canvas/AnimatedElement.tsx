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
  animate?: boolean
}

const AnimatedElement = ({
  children,
  elementId,
  initialPosition,
  animate = false,
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
          top: `${initialPosition.y}px`,
          left: `${initialPosition.x}px`,
          animationDelay: `.${elementOptions?.delay}s`,
          animationDuration: `${elementOptions.speed}s`,
          animationIterationCount: elementOptions.replay
            ? 'infinite'
            : '1',
          animationTimingFunction: `${elementOptions.easing}`,
          animationPlayState: animate == true ? 'running' : 'paused',
          animationName: `anim-${elementId}`,
        }}
      >
        {children}
      </div>
      <style>
        {`@keyframes anim-${elementId} {
          0% {
            top: ${initialPosition.y}px;
            left: ${initialPosition.x}px;
            transform: scale(1);
            opacity: 1;
            filter: blur(0px);
          }
          50% {
            top: ${(elementOptions?.y ?? 0) + initialPosition.y}px;
            left: ${(elementOptions?.x ?? 0) + initialPosition.x}px;
            transform: scale(${elementOptions?.scale});
            opacity: ${elementOptions?.opacity ?? 1};
            filter: blur(${elementOptions?.blur}px);
          }
        }`}
      </style>
    </>
  )
}

export default AnimatedElement
