import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;