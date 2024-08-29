const express = require('express');
const router = express.Router();
const {
  getMeals,
  addMeal,
  updateMeal,
  removeMeal,
} = require('../controllers/mealController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getMeals).post(protect, addMeal);
router.route('/:id').put(protect, updateMeal).delete(protect, removeMeal);

module.exports = router;
