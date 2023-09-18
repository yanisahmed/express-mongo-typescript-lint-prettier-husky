import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Generate an incremental ID
  if (!user.id) {
    const id = await generateUserId()
    user.id = id
  }
  // default password
  if (!user.password) {
    user.password = config.default_password as string
  }

  // Create a new User
  const createdUser = User.create(user)

  if (!createdUser) {
    throw new Error('Unable to create user!')
  }

  return createdUser
}

export default {
  createUser,
}
