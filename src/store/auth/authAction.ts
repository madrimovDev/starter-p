import { AxiosError } from 'axios'

import axios from '../../axios'
import { AppDispatch } from '../'
import { setToken } from '../../utils/localStorage'

import { authActions } from './authSlice'
import { ILogin, ResponseData } from './authTypes'

export const login = ({ username, password }: ILogin) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authActions.pending())
      const response = await axios.post<ResponseData>('/auth/login', {
        username,
        password,
      })
      setToken(response.data.jwt)
      dispatch(authActions.fulfilled(response.data.user))
    } catch (e) {
      dispatch(authActions.rejected(e as AxiosError))
    }
  }
}

export const jwtLogin = (jwt: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authActions.pending())
      const response = await axios.post<ResponseData>('/auth/login/jwt', {
        token: jwt,
      })
      setToken(response.data.jwt)
      dispatch(authActions.fulfilled(response.data.user))
    } catch (e) {
      dispatch(authActions.rejected(e as AxiosError))
    }
  }
}
