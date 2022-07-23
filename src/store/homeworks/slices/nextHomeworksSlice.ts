import CreateSlice from '../homeworksSliceCreator'

import { IHomework, IResponseData, IState } from '../homeworksTypes'

const initialState: IState = {
  loading: false,
  error: '',
  data: null,
}

const nextHomeworksSlice = CreateSlice<IHomework[]>(initialState, 'next')

export const nextHomeworksActions = nextHomeworksSlice.actions
export default nextHomeworksSlice.reducer
