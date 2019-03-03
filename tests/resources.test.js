const sinon = require('sinon');
const CityMapper = require('../src');
const resources = require('../src/resources');

const sandbox = sinon.createSandbox();

describe('CityMapper API Resources', () => {
  beforeEach(() => {
    sandbox.stub(CityMapper.prototype, 'post').resolves({});
    sandbox.stub(CityMapper.prototype, 'get').resolves({});
    this.citymapper = new CityMapper('foo');
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
