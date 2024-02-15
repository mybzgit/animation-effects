import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import './RangeInput.css'

const rangeElWidth = 118

type Props = {
  min: number
  max: number
  step?: number
  value: number
  hasCenter?: boolean
  onChangeInput: (value: number) => void
}

const RangeInput = ({
  min,
  max,
  step = 1,
  value,
  hasCenter = false,
  onChangeInput,
}: Props) => {
  const [progressWidth, setProgressWidth] = useState('')
  const [progressLeftPosition, setProgressLeftPosition] = useState('')

  const stepInPx = useMemo(
    () => rangeElWidth / (max - min),
    [max, min],
  )

  const updateProgress = useCallback(
    (_value: number) => {
      if (_value == 0) {
        setProgressWidth('0px')
        return
      }
      if (!hasCenter) {
        setProgressWidth(`${Math.floor(stepInPx * _value)}px`)
        setProgressLeftPosition('0px')
      } else {
        const center = Math.round((max - Math.abs(min)) / 2)
        const progress =
          center > 0 ? Math.abs(_value - center) : Math.abs(_value)
        setProgressWidth(`${stepInPx * progress}px`)
        if (_value > center) {
          setProgressLeftPosition(`${rangeElWidth / 2}px`)
        } else {
          setProgressLeftPosition(
            `${rangeElWidth / 2 - stepInPx * progress}px`,
          )
        }
      }
    },
    [hasCenter, stepInPx, max, min],
  )

  useEffect(() => {
    updateProgress(value)
  }, [value, updateProgress])

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const _value = +e.currentTarget?.value
      onChangeInput(_value)
    },
    [onChangeInput],
  )

  return (
    <div
      className='range-container'
      style={{ position: 'relative', display: 'flex' }}
    >
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div
        className='range-progress'
        style={{
          width: progressWidth,
          left: progressLeftPosition,
        }}
      ></div>
    </div>
  )
}

export default RangeInput
