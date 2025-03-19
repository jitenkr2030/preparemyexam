const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: [{
    text: String,
    isCorrect: Boolean
  }],
  explanation: String,
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  marks: {
    type: Number,
    default: 1
  },
  subject: String,
  topic: String
});

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  duration: Number, // in minutes
  totalMarks: Number,
  questions: [questionSchema]
});

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  examType: {
    type: String,
    enum: ['mock', 'practice', 'previous_year'],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'intermediate'
  },
  duration: {
    type: Number,
    required: true // in minutes
  },
  totalMarks: {
    type: Number,
    required: true
  },
  passingMarks: {
    type: Number,
    required: true
  },
  sections: [sectionSchema],
  instructions: [String],
  isPublished: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  attemptCount: {
    type: Number,
    default: 0
  },
  averageScore: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Method to calculate total marks
examSchema.methods.calculateTotalMarks = function() {
  return this.sections.reduce((total, section) => {
    return total + section.totalMarks;
  }, 0);
};

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;