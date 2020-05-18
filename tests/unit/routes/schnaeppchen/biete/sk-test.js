import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | schnaeppchen/biete/SK', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:schnaeppchen/biete/sk');
    assert.ok(route);
  });
});
