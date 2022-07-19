import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '../../hooks/redux'

const RequireAuth = () => {
  const { user } = useAppSelector((state) => state.auth)
  return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default RequireAuth
