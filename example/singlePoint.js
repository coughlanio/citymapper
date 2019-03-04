const assert = require('assert');
const Citymapper = require('../src');

const {
  CITYMAPPER_API_KEY: apiKey,
} = process.env;

const citymapper = new Citymapper(apiKey);

const params = {
  coord: '51.578973,-0.124147',
};

citymapper.getSinglePointCoverage(params)
  .then(assert);
