const jsf = require('json-schema-faker');
const request = require('request-promise-native');
const sinon = require('sinon');
const CityMapper = require('../src');
const resources = require('../src/resources');

const sandbox = sinon.createSandbox();

describe('CityMapper API Requests', () => {
  beforeEach(() => {
    sandbox.stub(request, 'post').resolves({});
    sandbox.stub(request, 'get').resolves({});
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
      const data = jsf.generate(schema);
      const expected = {
        qs: Object.assign({ key: 'foo' }, method === 'get' ? data : null),
        json: method === 'post' ? data : true,
      };

      await this.citymapper[name](data);
      sinon.assert.calledOnce(request[method]);
      sinon.assert.calledWith(request[method], `${this.citymapper.api}/${path}`, expected);
    });
  });
});
