import expect from 'expect';
import {
  paramsId,
  __RewireAPI__ as CtrlRewire,
} from '../../../src/person/controller';

function noop() {
  return;
}

const fakePerson = {
  firstname: 'foo',
};

describe('Person Controller', () => {
  describe('paramsId db lookup', () => {
    afterEach(() => {
      CtrlRewire.__ResetDependency__('getById');
    });
    it('successfully does a db lookup', () => {
      const req = {};
      CtrlRewire.__set__('getById', () => Promise.resolve(fakePerson));
      return paramsId(req, {}, noop, 'some id')
        .then(() => {
          expect(req.appData).toExist();
          expect(req.appData.person).toEqual(fakePerson);
        });
    });
  });
});
