import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 64,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 64,
    },
    token: {
      type: String,
      default: '',
    },
    balance: {
      type: Number,
      default: 0,
    },
    avatarURL: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('User', userSchema);

export default User;
