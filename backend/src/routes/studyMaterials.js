const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { auth, checkRole } = require('../middleware/auth');
const StudyMaterial = require('../models/StudyMaterial');

// Validation middleware
const studyMaterialValidation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('type').isIn(['notes', 'video', 'practice_set', 'reference']).withMessage('Invalid material type'),
  body('level').isIn(['beginner', 'intermediate', 'advanced']).withMessage('Invalid level')
];

// Create new study material
router.post('/', [auth, studyMaterialValidation], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const studyMaterial = new StudyMaterial({
      ...req.body,
      uploadedBy: req.user.userId
    });

    await studyMaterial.save();
    res.status(201).json(studyMaterial);
  } catch (error) {
    console.error('Study material creation error:', error);
    res.status(500).json({ message: 'Server error during study material creation' });
  }
});

// Get all study materials
router.get('/', async (req, res) => {
  try {
    const { subject, type, level } = req.query;
    const filter = {};

    if (subject) filter.subject = subject;
    if (type) filter.type = type;
    if (level) filter.level = level;

    const studyMaterials = await StudyMaterial.find(filter)
      .populate('uploadedBy', 'username')
      .sort('-createdAt');

    res.json(studyMaterials);
  } catch (error) {
    console.error('Fetch study materials error:', error);
    res.status(500).json({ message: 'Server error while fetching study materials' });
  }
});

// Get study material by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const studyMaterial = await StudyMaterial.findById(req.params.id)
      .populate('uploadedBy', 'username');

    if (!studyMaterial) {
      return res.status(404).json({ message: 'Study material not found' });
    }

    res.json(studyMaterial);
  } catch (error) {
    console.error('Fetch study material error:', error);
    res.status(500).json({ message: 'Server error while fetching study material' });
  }
});

// Update study material
router.put('/:id', [auth], async (req, res) => {
  try {
    const studyMaterial = await StudyMaterial.findById(req.params.id);
    
    if (!studyMaterial) {
      return res.status(404).json({ message: 'Study material not found' });
    }

    // Check if user is owner or admin
    if (studyMaterial.uploadedBy.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this material' });
    }

    Object.assign(studyMaterial, req.body);
    await studyMaterial.save();

    res.json(studyMaterial);
  } catch (error) {
    console.error('Update study material error:', error);
    res.status(500).json({ message: 'Server error while updating study material' });
  }
});

// Delete study material
router.delete('/:id', auth, async (req, res) => {
  try {
    const studyMaterial = await StudyMaterial.findById(req.params.id);
    
    if (!studyMaterial) {
      return res.status(404).json({ message: 'Study material not found' });
    }

    // Check if user is owner or admin
    if (studyMaterial.uploadedBy.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this material' });
    }

    await studyMaterial.remove();
    res.json({ message: 'Study material deleted successfully' });
  } catch (error) {
    console.error('Delete study material error:', error);
    res.status(500).json({ message: 'Server error while deleting study material' });
  }
});

// Rate study material
router.post('/:id/rate', auth, async (req, res) => {
  try {
    const { rating, review } = req.body;
    
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Invalid rating value' });
    }

    const studyMaterial = await StudyMaterial.findById(req.params.id);
    if (!studyMaterial) {
      return res.status(404).json({ message: 'Study material not found' });
    }

    // Add or update user's rating
    const ratingIndex = studyMaterial.ratings.findIndex(
      r => r.user.toString() === req.user.userId
    );

    if (ratingIndex > -1) {
      studyMaterial.ratings[ratingIndex] = { user: req.user.userId, rating, review };
    } else {
      studyMaterial.ratings.push({ user: req.user.userId, rating, review });
    }

    // Update average rating
    studyMaterial.averageRating = studyMaterial.ratings.reduce((acc, curr) => acc + curr.rating, 0) / studyMaterial.ratings.length;

    await studyMaterial.save();
    res.json(studyMaterial);
  } catch (error) {
    console.error('Rate study material error:', error);
    res.status(500).json({ message: 'Server error while rating study material' });
  }
});

module.exports = router;