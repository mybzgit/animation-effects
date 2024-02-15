import { useCallback } from 'react'
import './Switch.css'

type Props = {
  checked?: boolean
  onClick: () => void
}

const Switch = ({ checked = false, onClick }: Props) => {
  const onCheckedChanged = useCallback(() => {
    onClick()
  }, [onClick])

  const onSpaceButtonDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.code == 'Space') {
        e.preventDefault()
        onClick()
      }
    },
    [onClick],
  )

  return (
    <div
      onKeyDown={onSpaceButtonDown}
      onClick={onCheckedChanged}
      role='checkbox'
      aria-checked={checked}
      tabIndex={0}
      className='switch'
      style={{
        backgroundColor: checked ? '#3e87f8' : '#afafaf',
        justifyContent: checked ? 'flex-end' : 'flex-start',
      }}
    >
      <div className='round'></div>
    </div>
  )
}

export default Switch
