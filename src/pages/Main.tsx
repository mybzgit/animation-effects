import Canvas from '../layout/main/Canvas'
import Header from '../layout/main/Header'
import SettingsPanel from '../layout/main/SettingsPanel'

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <div className='screen'>
          <Canvas />
        </div>
        <SettingsPanel />
      </main>
    </>
  )
}

export default Main
