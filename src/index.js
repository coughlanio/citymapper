const Ajv = require('ajv');
const request = require('request-promise-native');
const resources = require('./resources');

module.exports = class Citymapper {
  constructor(token) {
    this.api = 'https://developer.citymapper.com';
    this.key = token;
    this.validator = new Ajv();

    resources.forEach(({
      name,
      path,
      method,
      schema,
    }) => {
      Citymapper.prototype[name] = this[method].bind(this, path, schema);
    });
  }

  validate(schema, data) {
    const valid = this.validator.validate(schema, data);

    if (!valid) {
      throw new Error(this.validator.errors[0].message);
    }
  }

  get(path, schema, params) {
    this.validate(schema, params);

    const options = {
      json: true,
      qs: {
        ...params,
        key: this.key,
      },
    };

    return request.get(`${this.api}/${path}`, options);
  }

  post(path, schema, body) {
    this.validate(schema, body);

    const options = {
      json: body,
      qs: {
        key: this.key,
      },
    };

    return request.post(`${this.api}/${path}`, options);
  }
};
