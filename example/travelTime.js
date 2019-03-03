const assert = require('assert');
const CityMapper = require('../src');

const API_KEY = process.env.CITYMAPPER_API_KEY;

const citymapper = new CityMapper(API_KEY);

const params = {
  startcoord: '51.525246,0.084672',
  endcoord: '51.559098,0.074503',
};

citymapper.getTravelTime(params)
  .then(assert);
