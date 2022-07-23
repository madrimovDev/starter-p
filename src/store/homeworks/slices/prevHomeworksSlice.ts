import CreateSlice from '../homeworksSliceCreator'

import { IHomework, IResponseData, IState } from '../homeworksTypes'

const initialState: IState = {
  loading: false,
  error: '',
  data: null,
}

const prevHomeworksSlice = CreateSlice<IHomework[]>(initialState, 'prev')

export const prevHomeworksActions = prevHomeworksSlice.actions
export default prevHomeworksSlice.reducer
