export interface IHomework {
  userId: string
  title: string
  description: string
  isActive: boolean
  date: Date
  rate: number
}

export interface IResponseData {
  data: IHomework[]
  title: string
}
export interface IState {
  loading: boolean
  error: string
  data: IHomework[] | null
}
