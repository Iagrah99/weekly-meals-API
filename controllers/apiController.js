const { fetchEndpointsData } = require('../models/apiModel');

const getEndpoints = (req, res, next) => {
  const endpoints = fetchEndpointsData();
  res.status(200).send(endpoints).catch(next);
};

module.exports = getEndpoints;
