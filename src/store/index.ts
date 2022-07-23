import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authSlice from './auth/authSlice'
import actualHomeworksSlice from './homeworks/slices/actualHomeworksSlice'
import nextHomeworksSlice from './homeworks/slices/nextHomeworksSlice'
import prevHomeworksSlice from './homeworks/slices/prevHomeworksSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  homeworks: combineReducers({
    actualHomeworks: actualHomeworksSlice,
    prevHomeworks: prevHomeworksSlice,
    nextHomeworks: nextHomeworksSlice,
  }),
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
