import { Route, Routes } from 'react-router-dom'

import Homeworks from './pages/homeworks'
import Login from './pages/login'
import RequireAuth from './pages/requireAuth'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path='/' element={<Homeworks />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routers
