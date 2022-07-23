import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'

interface IState<T> {
  loading: boolean
  error: string
  data: T | null
}

const CreateSlice = <T>(initialState: IState<T>, name: string) => {
  return createSlice({
    initialState,
    name,
    reducers: {
      pending(state) {
        state.loading = true
        state.error = ''
        state.data = null
      },
      fulfilled(state, action: PayloadAction<AxiosResponse<T>>) {
        state.loading = false
        state.error = ''
        state.data = action.payload as any
      },
      rejected(state, action: PayloadAction<AxiosError>) {
        state.loading = false
        state.error = action.payload.response?.data as string
        state.data = null
      },
    },
  })
}

export default CreateSlice
