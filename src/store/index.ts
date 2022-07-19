import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authSlice from './auth/authSlice'
import homeworksSlice from './homeworks/homeworksSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  homeworks: homeworksSlice
})

const setupStore = () =>
  configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [thunk],
  })

export default setupStore

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
