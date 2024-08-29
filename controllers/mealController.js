const asyncHandler = require('express-async-handler');

const getMeals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get meals' });
});

const addMeal = asyncHandler(async (req, res) => {
  const meal = req.body;
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name field');
  }
  res.status(201).json({ message: `Add meal: ${meal.name}` });
});

const updateMeal = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name field');
  }
  res.status(200).json({ message: `Update meal ${req.params.id}` });
});

const removeMeal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Remove meal ${req.params.id}` });
});

module.exports = {
  getMeals,
  addMeal,
  updateMeal,
  removeMeal,
};
