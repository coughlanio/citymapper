const sinon = require('sinon');
const Citymapper = require('../src');
const resources = require('../src/resources');

const sandbox = sinon.createSandbox();

describe('CityMapper API Resources', () => {
  beforeEach(() => {
    sandbox.stub(Citymapper.prototype, 'post').resolves({});
    sandbox.stub(Citymapper.prototype, 'get').resolves({});
    this.citymapper = new Citymapper('foo');
  });

  afterEach(() => {
    sandbox.restore();
  });

  resources.forEach(({
    name,
    path,
    method,
    schema,
  }) => {
    it(name, async () => {
      await this.citymapper[name]();
      sinon.assert.calledOnce(this.citymapper[method]);
      sinon.assert.calledWith(this.citymapper[method], path, schema);
    });
  });
});
