import { AxiosError } from 'axios'

import axios from '../../axios'

import { AppDispatch } from '../'

import { getToken } from '../../utils/localStorage'

import { actualHomeworksActions } from './slices/actualHomeworksSlice'
import { prevHomeworksActions } from './slices/prevHomeworksSlice'
import { nextHomeworksActions } from './slices/nextHomeworksSlice'

export const getActualHomeworks = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    const token = getToken()
    try {
      dispatch(actualHomeworksActions.pending())
      const response = await axios.get('/homeworks/' + userId, {
        headers: { Authorization: `${token}` },
        params: { w: 'actual' },
      })
      dispatch(actualHomeworksActions.fulfilled(response.data))
    } catch (e) {
      dispatch(actualHomeworksActions.rejected(e as AxiosError))
    }
  }
}

export const getPrevHomeworks = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    const token = getToken()
    try {
      dispatch(prevHomeworksActions.pending())
      const response = await axios.get('/homeworks/' + userId, {
        headers: { Authorization: `${token}` },
        params: { w: 'prev' },
      })
      dispatch(prevHomeworksActions.fulfilled(response.data))
    } catch (e) {
      dispatch(prevHomeworksActions.rejected(e as AxiosError))
    }
  }
}

export const getNextHomeworks = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    const token = getToken()
    try {
      dispatch(nextHomeworksActions.pending())
      const response = await axios.get('/homeworks/' + userId, {
        headers: { Authorization: `${token}` },
        params: { w: 'next' },
      })
      dispatch(nextHomeworksActions.fulfilled(response.data))
    } catch (e) {
      dispatch(nextHomeworksActions.rejected(e as AxiosError))
    }
  }
}

export const getAllHomeworks = (userId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch<any>(getNextHomeworks(userId))
    dispatch<any>(getPrevHomeworks(userId))
    dispatch<any>(getActualHomeworks(userId))
  }
}
