/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite'
import { useCallback, useContext, useMemo } from 'react'
import RangeInput from '../../components/settings/RangeInput'
import SelectInput from '../../components/settings/SelectInput'
import Switch from '../../components/settings/Switch'
import { FocusContext } from '../../context/FocusContextProvider'
import { ElementOptions } from '../../interfaces/element'
import canvasStore from '../../store/canvasStore'
import SettingsItem from './SettingsItem'
import './SettingsPanel.css'

const SettingsPanel = observer(() => {
  const { setOption, getOptions } = canvasStore
  const { focusId } = useContext(FocusContext)

  const focusedElOptions = useMemo(() => {
    return getOptions(focusId)
  }, [focusId, getOptions])

  const setSingleOption = useCallback(
    (key: keyof ElementOptions, value: any) => {
      setOption(focusId, key, value)
    },
    [focusId, setOption],
  )

  return (
    <div className='settings-panel'>
      <SettingsItem label='X' spanContent={focusedElOptions?.x}>
        <RangeInput
          min={-100}
          max={100}
          value={focusedElOptions?.x}
          hasCenter
          onChangeInput={(v) => setSingleOption('x', v)}
        />
      </SettingsItem>
      <SettingsItem label='Y' spanContent={focusedElOptions?.y}>
        <RangeInput
          min={-100}
          max={100}
          value={focusedElOptions?.y}
          hasCenter
          onChangeInput={(v) => setSingleOption('y', v)}
        />
      </SettingsItem>
      <SettingsItem
        label='Opacity'
        spanContent={`${focusedElOptions?.opacity * 100}%`}
      >
        <RangeInput
          min={0}
          max={1}
          step={0.1}
          value={focusedElOptions?.opacity}
          onChangeInput={(v) => setSingleOption('opacity', v)}
        />
      </SettingsItem>

      <SettingsItem
        label='Scale'
        spanContent={focusedElOptions?.scale}
      >
        <RangeInput
          min={0.1}
          max={2}
          step={0.1}
          hasCenter
          value={focusedElOptions?.scale}
          onChangeInput={(v) => setSingleOption('scale', v)}
        />
      </SettingsItem>

      <SettingsItem label='Blur' spanContent={focusedElOptions?.blur}>
        <RangeInput
          min={0}
          max={20}
          value={focusedElOptions?.blur}
          onChangeInput={(v) => setSingleOption('blur', v)}
        />
      </SettingsItem>

      <SettingsItem
        label='Speed'
        spanContent={`${focusedElOptions?.speed}s`}
      >
        <RangeInput
          min={1}
          max={20}
          value={focusedElOptions?.speed}
          onChangeInput={(v) => setSingleOption('speed', v)}
        />
      </SettingsItem>

      <SettingsItem
        label='Delay'
        spanContent={`.${focusedElOptions?.delay}s`}
      >
        <RangeInput
          min={0}
          max={9}
          value={focusedElOptions?.delay}
          onChangeInput={(v) => setSingleOption('delay', v)}
        />
      </SettingsItem>

      <SettingsItem label='Easing'>
        <SelectInput
          value={focusedElOptions?.easing}
          onChange={(e) =>
            setSingleOption('easing', e.currentTarget.value)
          }
        />
      </SettingsItem>

      <SettingsItem label='Replay'>
        <Switch
          checked={focusedElOptions?.replay}
          onClick={() =>
            setSingleOption('replay', !focusedElOptions?.replay)
          }
        />
      </SettingsItem>
    </div>
  )
})

export default SettingsPanel
