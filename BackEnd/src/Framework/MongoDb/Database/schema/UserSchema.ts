import { verify } from 'crypto';
import mongoose, { Schema } from 'mongoose'

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false // Default value is false
  }
});

// Create the User model
const User = mongoose.model('User', userSchema);

export {
    User
}
