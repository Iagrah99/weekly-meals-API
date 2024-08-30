const { fetchEndpointsData } = require('../models/apiModel');
const asyncHandler = require('express-async-handler');

const getEndpoints = asyncHandler(async (req, res) => {
  const endpoints = fetchEndpointsData();
  res.status(200).json(endpoints);
});

module.exports = getEndpoints;
