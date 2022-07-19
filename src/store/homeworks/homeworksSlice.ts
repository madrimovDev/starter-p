import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { IHomework, IHomeworks } from './homeworksTypes'

const initialState: IHomeworks = {
  loading: false, 
  error: '',
  homeworks: []
}

const homeworksSlice = createSlice({
  name: 'homeworks',
  initialState,
  reducers: {
    pending(state) {
      state.loading = true
      state.error = ''
      state.homeworks = []
    },
    fulfilled(state, action: PayloadAction<IHomework[]>) {
      state.loading = false
      state.error = ''
      state.homeworks = action.payload
    },
    rejected(state, action: PayloadAction<AxiosError>) {
      state.loading = false
      state.error = action.payload.response?.data as string
      state.homeworks = []
    }
  },
})

export const homeworksActions = homeworksSlice.actions
export default homeworksSlice.reducer