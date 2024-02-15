import { ReactNode } from 'react'
import './SettingsItem.css'

type Props = {
  label: string
  children: ReactNode
  spanContent?: ReactNode
}

const SettingsItem = ({ label, children, spanContent }: Props) => {
  return (
    <div className='settings-item'>
      <label>{label}</label>
      {children}
      <span>{spanContent}</span>
    </div>
  )
}

export default SettingsItem
