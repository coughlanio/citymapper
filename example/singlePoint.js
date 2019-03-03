const assert = require('assert');
const Citymapper = require('../src');

const API_KEY = process.env.CITYMAPPER_API_KEY;

const citymapper = new Citymapper(API_KEY);

const params = {
  coord: '51.578973,-0.124147',
};

citymapper.getSinglePointCoverage(params)
  .then(assert);
