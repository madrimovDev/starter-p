export interface IAuth {
  loading: boolean,
  user: IUser | null,
  error: string
} 

export interface IUser {
  name: string,
  surname: string,
  username: string,
  group: number,
  direction: string,
  rating: number
}

export interface ILogin {
  username: string,
  password: string
}