import './App.css'
import { FocusContextProvider } from './context/FocusContextProvider'
import Router from './router'

function App() {
  return (
    <FocusContextProvider>
      <Router />
    </FocusContextProvider>
  )
}

export default App
