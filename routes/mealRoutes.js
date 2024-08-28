const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get meals' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Add meal' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update meal ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete meal ${req.params.id}` });
});

module.exports = router;
