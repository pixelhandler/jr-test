import { moduleFor, test } from 'ember-qunit';
import Resource from '../../../models/author';

moduleFor('serializer:author', 'Unit | Serializer | author', {
  beforeEach() {
    Resource.prototype.container = this.container;
    let opts = { instantiate: false, singleton: false };
    this.container.register('model:authors', Resource, opts);
  },
  afterEach() {
    delete Resource.prototype.container;
  }
});

// Replace this with your real tests.
test('it serializes resources', function(assert) {
  let resource = this.container.lookupFactory('model:authors').create();
  let serializer = this.subject();
  var serializedResource = serializer.serialize(resource);
  assert.equal(serializedResource.data.type, 'authors', 'serializes a author resource');
});
