import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

// Create User Model Type
type userModel = Model<IUser, object>

// Create User  Schema
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// Create User Model
export const User = model<IUser, userModel>('User', userSchema)
