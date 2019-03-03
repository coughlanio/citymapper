const assert = require('assert');
const CityMapper = require('../src');

const API_KEY = process.env.CITYMAPPER_API_KEY;

const citymapper = new CityMapper(API_KEY);

const params = {
  points: [
    {
      coord: ['40.1', '-73.0'],
      id: 'test1',
    },
    {
      coord: ['37.784', '-122.402'],
    },
    {
      coord: ['41.84', '-73'],
      id: 'test2',
    },
    {
      id: 'test3',
    },
  ],
};

citymapper.getCoverage(params)
  .then(assert);
