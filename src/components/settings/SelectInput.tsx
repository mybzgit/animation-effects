import { ChangeEventHandler } from 'react'
import './SelectInput.css'
import { EasingFunc } from '../../interfaces/element'

type Props = {
  value: string
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const SelectInput = ({ value, onChange }: Props) => {
  return (
    <select value={value} onChange={onChange}>
      <option value={EasingFunc.Linear}>Linear</option>
      <option value={EasingFunc.EaseIn}>Ease-in</option>
      <option value={EasingFunc.EaseOut}>Ease-out</option>
      <option value={EasingFunc.EaseInOut}>Ease-in-out</option>
      <option value={EasingFunc.Steps2}>Steps(2)</option>
      <option value={EasingFunc.Steps3Start}>Steps(3, start)</option>
      <option value={EasingFunc.Steps5End}>Steps(5, end)</option>
      <option value={EasingFunc.Steps2JumpStart}>
        Steps(2, jump-start)
      </option>
      <option value={EasingFunc.Steps4JumpEnd}>
        Steps(4, jump-end)
      </option>
      <option value={EasingFunc.Steps5JumpNone}>
        Steps(5, jump-none)
      </option>
      <option value={EasingFunc.Steps5JumpBoth}>
        Steps(5, jump-both)
      </option>
    </select>
  )
}

export default SelectInput
