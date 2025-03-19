const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { auth, checkRole } = require('../middleware/auth');
const Exam = require('../models/Exam');

// Validation middleware
const examValidation = [
  body('name').trim().notEmpty().withMessage('Exam name is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('examType').isIn(['mock', 'practice', 'previous_year']).withMessage('Invalid exam type'),
  body('category').trim().notEmpty().withMessage('Category is required'),
  body('duration').isInt({ min: 1 }).withMessage('Duration must be a positive number'),
  body('totalMarks').isInt({ min: 1 }).withMessage('Total marks must be a positive number'),
  body('passingMarks').isInt({ min: 1 }).withMessage('Passing marks must be a positive number')
];

// Create new exam (Admin only)
router.post('/', [auth, checkRole(['admin']), examValidation], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const exam = new Exam({
      ...req.body,
      createdBy: req.user.userId
    });

    await exam.save();
    res.status(201).json(exam);
  } catch (error) {
    console.error('Exam creation error:', error);
    res.status(500).json({ message: 'Server error during exam creation' });
  }
});

// Get all published exams
router.get('/', async (req, res) => {
  try {
    const { category, type, difficulty } = req.query;
    const filter = { isPublished: true };

    if (category) filter.category = category;
    if (type) filter.examType = type;
    if (difficulty) filter.difficulty = difficulty;

    const exams = await Exam.find(filter)
      .select('-sections.questions.options.isCorrect')
      .populate('createdBy', 'username');

    res.json(exams);
  } catch (error) {
    console.error('Fetch exams error:', error);
    res.status(500).json({ message: 'Server error while fetching exams' });
  }
});

// Get exam by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.query.id)
      .populate('createdBy', 'username');

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // If exam is not published, only admin or creator can view it
    if (!exam.isPublished && 
        req.user.role !== 'admin' && 
        exam.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(exam);
  } catch (error) {
    console.error('Fetch exam error:', error);
    res.status(500).json({ message: 'Server error while fetching exam' });
  }
});

// Update exam (Admin only)
router.put('/:id', [auth, checkRole(['admin'])], async (req, res) => {
  try {
    const exam = await Exam.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json(exam);
  } catch (error) {
    console.error('Update exam error:', error);
    res.status(500).json({ message: 'Server error while updating exam' });
  }
});

// Delete exam (Admin only)
router.delete('/:id', [auth, checkRole(['admin'])], async (req, res) => {
  try {
    const exam = await Exam.findByIdAndDelete(req.params.id);

    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    console.error('Delete exam error:', error);
    res.status(500).json({ message: 'Server error while deleting exam' });
  }
});

// Add question to exam section (Admin only)
router.post('/:id/sections/:sectionId/questions', [auth, checkRole(['admin'])], async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const section = exam.sections.id(req.params.sectionId);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }

    section.questions.push(req.body);
    await exam.save();

    res.status(201).json(exam);
  } catch (error) {
    console.error('Add question error:', error);
    res.status(500).json({ message: 'Server error while adding question' });
  }
});

module.exports = router;