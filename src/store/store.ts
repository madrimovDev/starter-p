import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authSlice from './auth/authSlice'

const rootReducer = combineReducers({
  auth: authSlice,
})

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: [thunk],
})

export default store
