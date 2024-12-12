import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['student', 'teacher', 'parent'], 
    required: true 
  },
  profile: {
    avatar: String,
    bio: String,
    location: String,
    education: [{
      degree: String,
      institution: String,
      year: Number
    }],
    subjects: [{
      name: String,
      level: String,
      hourlyRate: Number
    }],
    availability: [{
      day: String,
      slots: [{
        start: String,
        end: String
      }]
    }]
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);