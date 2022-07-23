import CreateSlice from '../homeworksSliceCreator'

import { IHomework, IResponseData, IState } from './../homeworksTypes'

const initialState: IState = {
  loading: false,
  error: '',
  data: null
}

const actualHomeworksSlice = CreateSlice<IHomework[]>(initialState, 'actual')

export const actualHomeworksActions = actualHomeworksSlice.actions
export default actualHomeworksSlice.reducer
