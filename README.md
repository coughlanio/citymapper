# Citymapper

Client library for interacting with the Citymapper Developer API.

[![CircleCI](https://circleci.com/gh/coughlanio/citymapper.svg?style=svg)](https://circleci.com/gh/coughlanio/citymapper) [![codecov](https://codecov.io/gh/coughlanio/citymapper/branch/master/graph/badge.svg)](https://codecov.io/gh/coughlanio/citymapper)

## Installation

```
npm install citymapper
````

## Requirements

* Citymapper API key from [here](https://citymapper.3scale.net/).

## Usage

```
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

```

## API
The following is a list of API methods available to call.

### getTravelTime(`params`)
Determines the travel time on public transportation between the given two points. If this call is used and returns a successful result, the calling application must provide a link to that journey plan in the Citymapper mobile app or website, as described in https://citymapper.com/developers
```
schema: {
  type: 'object',
  properties: {
    startcoord: {
      type: 'string',
    },
    endcoord: {
      type: 'string',
    },
  },
  required: [
    'startcoord',
    'endcoord',
  ],
}
```

### getSinglePointCoverage(`params`)
Determines whether a single point falls within Citymapper's coverage areas. Callers are welcome to cache coverage results, though negative results should not be cached for more than 24 hours to ensure that when new coverage areas are launched by Citymapper, they are quickly reflected in the external app.
```
schema: {
  type: 'object',
  properties: {
    coord: {
      type: 'string',
    },
  },
  required: [
    'coord',
  ],
}
```

### getCoverage(`params`)
Checks multiple points to see which ones fall within Citymapper's coverage areas. Callers are welcome to cache coverage results, though negative results should not be cached for more than 24 hours to ensure that when new coverage areas are launched by Citymapper, they are quickly reflected in the external app.
```
schema: {
  type: 'object',
  properties: {
    points: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          coord: {
            type: 'array',
            items: {
              type: 'string',
            },
            minItems: 2,
            maxItems: 2,
          },
          id: {
            type: 'string',
          },
        },
      },
      minItems: 1,
    },
  },
  required: [
    'points',
  ],
}
```
