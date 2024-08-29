const asyncHandler = require('express-async-handler');

const Meal = require('../models/mealModel');

// @desc    Get Meals
// @route   GET /api/meals
const getMeals = asyncHandler(async (req, res) => {
  const meals = await Meal.find();
  res.status(200).json(meals);
});

// @desc    Add Meal
// @route   POST /api/meals
const addMeal = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name field');
  }

  const meal = await Meal.create({
    name: req.body.name,
  });
  res.status(201).json(meal);
});

// @desc    Update Meal
// @route   PUT /api/meals/:id
const updateMeal = asyncHandler(async (req, res) => {
  const meal = await Meal.findById(req.params.id);

  if (!meal) {
    res.status(400);
    throw new Error('Meal not found');
  }

  const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedMeal);
});

// @desc    Remove Meal
// @route   DELETE /api/meals/:id
const removeMeal = asyncHandler(async (req, res) => {
  const meal = await Meal.findById(req.params.id);

  if (!meal) {
    res.status(400);
    throw new Error('Meal not found');
  }

  await meal.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMeals,
  addMeal,
  updateMeal,
  removeMeal,
};
