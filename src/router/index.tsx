import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Preview from '../pages/Preview'

const Router = () => {
  return (
    <BrowserRouter basename='/animation-effects/'>
      <Routes>
        <Route path='/'>
          <Route index element={<Main />} />
          <Route path='/preview' element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
