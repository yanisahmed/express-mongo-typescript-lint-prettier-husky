import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

// Create Model Type
type userModel = Model<IUser, object>

// Create Model Schema
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

// Create Model
export const User = model<IUser, userModel>('User', userSchema)
