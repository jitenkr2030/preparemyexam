const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const User = require('../models/User');
const Exam = require('../models/Exam');

// Get user's progress summary
router.get('/summary', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select('progress studyPreferences')
      .populate('targetExams', 'name category difficulty');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      progress: user.progress,
      studyPreferences: user.studyPreferences,
      targetExams: user.targetExams
    });
  } catch (error) {
    console.error('Progress summary error:', error);
    res.status(500).json({ message: 'Server error while fetching progress summary' });
  }
});

// Update study preferences
router.put('/study-preferences', auth, async (req, res) => {
  try {
    const { preferredSubjects, studyTime, weeklyStudyHours } = req.body;

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.studyPreferences = {
      preferredSubjects: preferredSubjects || user.studyPreferences.preferredSubjects,
      studyTime: studyTime || user.studyPreferences.studyTime,
      weeklyStudyHours: weeklyStudyHours || user.studyPreferences.weeklyStudyHours
    };

    await user.save();
    res.json(user.studyPreferences);
  } catch (error) {
    console.error('Update study preferences error:', error);
    res.status(500).json({ message: 'Server error while updating study preferences' });
  }
});

// Record exam attempt
router.post('/exam-attempts/:examId', auth, async (req, res) => {
  try {
    const { score, timeSpent, completedAt } = req.body;

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const exam = await Exam.findById(req.params.examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    // Update exam statistics
    exam.attemptCount += 1;
    exam.averageScore = ((exam.averageScore * (exam.attemptCount - 1)) + score) / exam.attemptCount;
    await exam.save();

    // Update user progress
    user.progress.completedExams += 1;
    user.progress.averageScore = ((user.progress.averageScore * (user.progress.completedExams - 1)) + score) / user.progress.completedExams;
    user.progress.studyHours += timeSpent / 60; // Convert minutes to hours

    await user.save();

    res.json({
      message: 'Exam attempt recorded successfully',
      progress: user.progress
    });
  } catch (error) {
    console.error('Record exam attempt error:', error);
    res.status(500).json({ message: 'Server error while recording exam attempt' });
  }
});

// Get detailed exam history
router.get('/exam-history', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .populate({
        path: 'targetExams',
        select: 'name category difficulty attemptCount averageScore'
      });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      examHistory: user.targetExams,
      totalExamsCompleted: user.progress.completedExams,
      averageScore: user.progress.averageScore
    });
  } catch (error) {
    console.error('Fetch exam history error:', error);
    res.status(500).json({ message: 'Server error while fetching exam history' });
  }
});

// Update study hours
router.post('/study-hours', auth, async (req, res) => {
  try {
    const { hours, date } = req.body;

    if (!hours || hours < 0) {
      return res.status(400).json({ message: 'Invalid study hours' });
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.progress.studyHours += hours;
    await user.save();

    res.json({
      message: 'Study hours updated successfully',
      totalStudyHours: user.progress.studyHours
    });
  } catch (error) {
    console.error('Update study hours error:', error);
    res.status(500).json({ message: 'Server error while updating study hours' });
  }
});

module.exports = router;