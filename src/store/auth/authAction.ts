import axios from '../../axios'
import { AppDispatch } from '../'

import { authActions } from './authSlice'
import { ILogin, IUser } from './authTypes'

export const login = ({ username, password }: ILogin) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(authActions.pending())

      const response = await axios.post('/login', {
        username,
        password,
      })
      dispatch(authActions.fulfilled(response.data as IUser))
    } catch (e) {
      dispatch(authActions.rejected(e as Error))
    }
  }
}
