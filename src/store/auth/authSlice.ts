import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { IAuth, IUser } from './authTypes'

const initialState: IAuth = {
  error: '',
  loading: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    pending(state) {
      state.loading = true
      state.user = null
      state.error = ''
    },
    fulfilled(state, action: PayloadAction<IUser>) {
      state.loading = false
      state.error = ''
      state.user = action.payload
    },
    rejected(state, action: PayloadAction<AxiosError>) {
      state.loading = false
      state.error = action.payload.response?.data as string
      state.user = null
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer
