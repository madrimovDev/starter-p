import { AxiosError } from 'axios'

import axios from '../../axios'

import { AppDispatch } from '../'

import { getToken } from '../../utils/localStorage'

import { homeworksActions } from './homeworksSlice'

export const getHomeworks = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    const token = getToken()
    try {
      dispatch(homeworksActions.pending())
      const response = await axios.get('/homeworks/' + userId, {
        headers: { Authorization: `${token}` },
      })
      dispatch(homeworksActions.fulfilled(response.data))
    } catch (e) {
      dispatch(homeworksActions.rejected(e as AxiosError))
    }
  }
}
