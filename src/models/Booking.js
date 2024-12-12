import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  teacher: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  subject: {
    name: String,
    level: String
  },
  schedule: {
    date: Date,
    startTime: String,
    endTime: String
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
    default: 'pending' 
  },
  payment: {
    amount: Number,
    status: { 
      type: String, 
      enum: ['pending', 'paid'], 
      default: 'pending' 
    },
    stripePaymentId: String
  },
  notes: String
}, {
  timestamps: true
});

export default mongoose.model('Booking', bookingSchema);