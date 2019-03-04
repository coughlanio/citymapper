const assert = require('assert');
const Citymapper = require('../src');

const {
  CITYMAPPER_API_KEY: apiKey,
} = process.env;

const citymapper = new Citymapper(apiKey);

const params = {
  startcoord: '51.525246,0.084672',
  endcoord: '51.559098,0.074503',
};

citymapper.getTravelTime(params)
  .then(assert);
