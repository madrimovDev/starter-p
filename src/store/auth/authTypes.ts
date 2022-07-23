export interface IAuth {
  loading: boolean,
  user: IUser | null,
  error: string
} 

export interface IUser {
  userId:  string,
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

export interface ResponseData {
  user: IUser,
  jwt: string
}