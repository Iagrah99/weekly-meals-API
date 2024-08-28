const getMeals = async (req, res) => {
  res.status(200).json({ message: 'Get meals' });
};

const addMeal = async (req, res) => {
  const meal = req.body;
  res.status(201).json({ message: `Add meal: ${meal.name}` });
};

const updateMeal = async (req, res) => {
  res.status(200).json({ message: `Update meal ${req.params.id}` });
};

const removeMeal = async (req, res) => {
  res.status(200).json({ message: `Remove meal ${req.params.id}` });
};

module.exports = {
  getMeals,
  addMeal,
  updateMeal,
  removeMeal,
};
