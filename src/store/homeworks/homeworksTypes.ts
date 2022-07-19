export interface IHomework {
  userId: string
  title: string
  description: string
  isActive: boolean
  date: string
  rate: number
}

export interface IHomeworks {
  loading: boolean
  error: string
  homeworks: IHomework[] | []
}