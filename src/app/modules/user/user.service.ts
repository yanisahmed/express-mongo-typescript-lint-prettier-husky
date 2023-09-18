import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // AUTO GENERATED iNCREMENTAL ID
  // DEFAULT PASSWORD
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to Create User')
  }
  return createdUser
}

export default {
  createUser,
}
