import mongoose from "mongoose";

const technicianSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, 'Phone number must be 10 digits.']
    },
    district: {
      type: String,
      required: true
    },
    workexp: {
      type: Number,
      required: true
    },
    worklevel: {
      type: Number,
      required: false
    },
    designation: {
      type: String,
      required: true,
      enum: ['Mobile Technician', 'Computer Technician', 'AC Technician']
    },
    aadarNo: {
      type: String,
      required: true,
      
    },
    panNo: {
      type: String,
      required: true,
     
    },
    serviceCharge: {
      type: Number,
      required: false
    },
    password: {
      type: String,
      required: true,
     
    },
    
  }, {
    timestamps: true
  });

  const Technican = mongoose.model('Technicians', technicianSchema);

export {
    Technican
}