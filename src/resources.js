const apiVersion = 1;

module.exports = [
  {
    name: 'getTravelTime',
    method: 'get',
    path: `api/${apiVersion}/traveltime`,
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
    },
  },
  {
    name: 'getSinglePointCoverage',
    method: 'get',
    path: `api/${apiVersion}/singlepointcoverage`,
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
    },
  },
  {
    name: 'getCoverage',
    method: 'post',
    path: `api/${apiVersion}/coverage`,
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
    },
  },
];
