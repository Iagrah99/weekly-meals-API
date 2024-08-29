const asyncHandler = require('express-async-handler');

const Meal = require('../models/mealModel');
const User = require('../models/userModel');

// @desc    Get Meals
// @route   GET /api/meals
// @access  Public
const getMeals = asyncHandler(async (req, res) => {
  const meals = await Meal.find({ user: req.user.id });
  res.status(200).json(meals);
});

// @desc    Add Meal
// @route   POST /api/meals
// @access  Private
const addMeal = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name field');
  }

  const meal = await Meal.create({
    name: req.body.name,
    user: req.user.id,
  });
  res.status(201).json(meal);
});

// @desc    Update Meal
// @route   PUT /api/meals/:id
// @access  Private
const updateMeal = asyncHandler(async (req, res) => {
  const meal = await Meal.findById(req.params.id);

  if (!meal) {
    res.status(400);
    throw new Error('Meal not found');
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the meal user
  if (meal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorised');
  }

  const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedMeal);
});

// @desc    Remove Meal
// @route   DELETE /api/meals/:id
// @access  Private
const removeMeal = asyncHandler(async (req, res) => {
  const meal = await Meal.findById(req.params.id);

  if (!meal) {
    res.status(400);
    throw new Error('Meal not found');
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the meal user
  if (meal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorised');
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
