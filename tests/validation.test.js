const assert = require('assert');
const sinon = require('sinon');
const Citymapper = require('../src');
const resources = require('../src/resources');

const sandbox = sinon.createSandbox();

describe('CityMapper API Validation', () => {
  beforeEach(() => {
    this.citymapper = new Citymapper('foo');
  });

  afterEach(() => {
    sandbox.restore();
  });

  resources.forEach(({
    name,
  }) => {
    it(name, async () => {
      assert.throws(() => this.citymapper[name]({}), Error);
    });
  });
});
