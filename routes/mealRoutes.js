const express = require('express');
const router = express.Router();
const {
  getMeals,
  addMeal,
  updateMeal,
  removeMeal,
} = require('../controllers/mealControllers');

router.route('/').get(getMeals).post(addMeal);
router.route('/:id').put(updateMeal).delete(removeMeal);

module.exports = router;
