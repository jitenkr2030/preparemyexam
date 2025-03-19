const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },
  profilePicture: {
    type: String,
    default: ''
  },
  educationLevel: {
    type: String,
    enum: ['high_school', 'undergraduate', 'graduate', 'other'],
    required: true
  },
  targetExams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam'
  }],
  studyPreferences: {
    preferredSubjects: [String],
    studyTime: {
      type: String,
      enum: ['morning', 'afternoon', 'evening', 'night']
    },
    weeklyStudyHours: Number
  },
  progress: {
    completedExams: Number,
    averageScore: Number,
    studyHours: Number
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password for login
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;