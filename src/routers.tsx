import { Route, Routes } from 'react-router-dom'

import Homeworks from './pages/homeworks'
import Login from './pages/auth/login'
import RequireAuth from './pages/auth/requireAuth'
import MainLayout from './layouts/mainLayout'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homeworks />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default Routers